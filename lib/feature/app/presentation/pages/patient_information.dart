import 'package:ent_doctors/core/core.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/feature/app/presentation/widgets/widgets.dart';

class PatientInformationTab extends ConsumerWidget {
  const PatientInformationTab({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      child: ScrollConfiguration(
        behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
        child: ListView(
          children: const [
            PatientCard(),
            largeHeight,
            HealthRecord(),
            largeHeight,
            Diagnosis(),
            largeHeight,
            ScreeningImages()
          ],
        ),
      ),
    );
  }
}
