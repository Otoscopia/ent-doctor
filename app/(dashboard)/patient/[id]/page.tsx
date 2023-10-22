"use client";

import { useEffect, useState } from "react";
import Header from "./widgets/header";
import Loading from "@/app/loading";
import {
  DATABASE_ID,
  FOLLOW_UPS_COLLECTION,
  SCREENING_COLLECTION,
  databases,
} from "@/app/api/appwrite";
import { useRouter } from "next/navigation";
import Content from "./widgets/content";
import { SnapshotPayload } from "@/interface/snapshot-interface";
import { Dropdown, Datepicker, Modal, Button } from "flowbite-react";

interface Params {
  params: { id: string };
}

export default function Patient({ params }: Params) {
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState<SnapshotPayload>();
  const { push, refresh } = useRouter();
  const [status, setStatus] = useState("");
  const [date, setDate] = useState<Date>();
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await databases.getDocument(
          DATABASE_ID,
          SCREENING_COLLECTION,
          params.id
        );
        setRecord(data as SnapshotPayload);
        setLoading(false);
      } catch (error) {
        console.log(error);
        push("/app");
      }
    };

    fetchData();
  }, [params.id, push]);

  if (loading) return <Loading />;

  const data = status.includes("initial")
    ? {
        patient: record!.patient.$id,
        screeningId: params.id,
        doctor: record!.$id,
        status: status,
        reason: message,
        schedule: date,
      }
    : {
        status: status,
        doctorComment: message,
        date,
      };

  const handleSubmit = async () => {
    try {
      await databases.updateDocument(
        DATABASE_ID,
        status.includes("initial")
          ? FOLLOW_UPS_COLLECTION
          : SCREENING_COLLECTION,
        params.id,
        data
      );

      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col min-h-screen p-4">
      <div className="sticky top-4 z-[2]">
        <Header patient={record!.patient} status={record!.status} />
      </div>
      <Content record={record!} />
      <div className="fixed right-8 bottom-8">
        <button
          type="button"
          className="btn btn-primary w-min"
          onClick={() => props.setOpenModal("default")}
        >
          Update
        </button>
      </div>

      <div className="items-center justify-center flex">
        <Modal
          show={props.openModal === "default"}
          onClose={() => props.setOpenModal(undefined)}
          className="p-4 bg-transparent m-4"
        >
          <Modal.Header className="p-4">Doctors&apos; thoughts</Modal.Header>
          <Modal.Body>
            <form method="dialog" className="space-y-4" onSubmit={handleSubmit}>
              <Dropdown
                label={
                  status.length === 0 ? "Set Medical Record Status" : status
                }
                value={status}
              >
                <Dropdown.Item onClick={() => setStatus("Final Diagnosis")}>
                  Final Diagnosis
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatus("Initial Diagnosis")}>
                  Initial Diagnosis
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatus("Pending Diagnosis")}>
                  Pending Diagnosis
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setStatus("Medical Attention")}>
                  Medical Attention
                </Dropdown.Item>
              </Dropdown>

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                onChange={(value) => setMessage(value.target.value)}
              />

              {status.includes("Initial") && (
                <Datepicker onSelectedDateChanged={(value) => setDate(value)} />
              )}

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}
