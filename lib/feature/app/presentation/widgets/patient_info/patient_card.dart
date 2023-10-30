import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/presentation/widgets/widgets.dart';

class PatientCard extends ConsumerWidget {
  const PatientCard({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      borderRadius: BorderRadius.circular(8),
      child: const Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextBodyLarge(text: "PATIENT NAME"),
              smallHeight,
              TextRich(title: birthdayText, value: "SCHOOL NURSE"),
              TextRich(title: ageGenderText, value: "SCHOOL NURSE"),
              TextRich(title: schoolText, value: "SCHOOL NURSE"),
              TextRich(title: contactNumberText, value: "SCHOOL NURSE"),
            ],
          ),
          largeWidth,
          Divider(direction: Axis.vertical),
          largeWidth,
          VitalsContainer(values: ["0", "1", "2"])
        ],
      ),
    );
  }
}
