import 'package:ent_doctors/core/core.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class Diagnosis extends ConsumerWidget {
  const Diagnosis({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        TextBodyStrong(text: diagnosisText),
        TextRich(title: patientTreatedText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: patientAllergiesText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: patientSurgicalProcedureText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: patientMedicationText, value: "SCHOOL NURSE"),
        smallHeight,
        TextRich(title: patientMedicationTypeText, value: "SCHOOL NURSE"),
      ],
    );
  }
}
