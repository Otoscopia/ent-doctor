import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter/material.dart' as m;
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/config/config.dart';
import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/app.dart';
import 'package:ent_doctors/mock-data.dart';

class PatientTable extends ConsumerWidget {
  const PatientTable({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    String filter = ref.watch(filterTableProvider);
    String filterTyle = filter == filterByDefaultText ? "" : filter;

    List filterTable = patientData
        .where((element) => element[filterStatus]
            .toString()
            .toLowerCase()
            .contains(filterTyle.toLowerCase()))
        .toList();

    return m.Material(
      color: transparent,
      borderRadius: BorderRadius.circular(4),
      child: m.DataTable(
        showCheckboxColumn: false,
        border: TableBorder(borderRadius: BorderRadius.circular(4)),
        columns: [
          m.DataColumn(label: Text(tableHeader[0])),
          m.DataColumn(label: Text(tableHeader[1])),
          m.DataColumn(label: Text(tableHeader[2])),
          m.DataColumn(label: Text(tableHeader[3])),
          m.DataColumn(label: Text(tableHeader[4])),
        ],
        rows: filterTable
            .map((patient) => m.DataRow(
                  cells: [
                    m.DataCell(Text(patient[tableHeader[0]])),
                    m.DataCell(Text(patient[tableHeader[1]])),
                    m.DataCell(Text(patient[tableHeader[2]])),
                    m.DataCell(Text(patient[tableHeader[3]])),
                    m.DataCell(Text(patient[tableHeader[4]])),
                  ],
                  onSelectChanged: (value) => ref
                      .read(tabProvider.notifier)
                      .newTab(patient[tableHeader[0]]),
                ))
            .toList(),
      ),
    );
  }
}
