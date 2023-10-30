import 'package:ent_doctors/core/core.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HealthRecord extends ConsumerWidget {
  const HealthRecord({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        TextBodyStrong(text: healthRecordText),
        TextRich(title: performedByText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: performedAtText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: healthWorkerRemarksText, value: "SCHOOL NURSE"),
        largeHeight,
        TextRich(title: chiefComplaintText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: chiefComplaintMessageText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: historyOfIllnessText, value: "SCHOOL NURSE"),
      ],
    );
  }
}
