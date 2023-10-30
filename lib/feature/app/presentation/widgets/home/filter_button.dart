import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/app.dart';

class FilterButton extends ConsumerWidget {
  const FilterButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return DropDownButton(
      leading: const Icon(FluentIcons.filter),
      title: Text('$filterByText ${ref.watch(filterTableProvider)}'),
      items: [
        MenuFlyoutItem(
            text: const Text(filterByFinalText),
            onPressed: () => ref.read(filterTableProvider.notifier).setFilter(filterByFinalText)),
        MenuFlyoutItem(
            text: const Text(filterByMedicalText),
            onPressed: () => ref.read(filterTableProvider.notifier).setFilter(filterByMedicalText)),
        MenuFlyoutItem(
            text: const Text(filterByDiagnosisText),
            onPressed: () => ref.read(filterTableProvider.notifier).setFilter(filterByDiagnosisText)),
        const MenuFlyoutSeparator(),
        MenuFlyoutItem(
            text: const Text(filterByDefaultText),
            onPressed: () => ref.read(filterTableProvider.notifier).setFilter(filterByDefaultText)),
      ],
    );
  }
}
