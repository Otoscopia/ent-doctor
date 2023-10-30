
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/feature/app/app.dart';
import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/mock-data.dart';

class SearchBox extends ConsumerWidget {
  const SearchBox({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    List<AutoSuggestBoxItem<String>> items = patientData
        .map(
          (patient) => AutoSuggestBoxItem<String>(
              value: patient['Name'], label: patient['Name']),
        )
        .toList();
    return SizedBox(
      width: 330,
      child: AutoSuggestBox(
        placeholder: searchPatientText,
        items: items,
        onSelected: (value) =>
            ref.read(tabProvider.notifier).newTab(value.value!),
        leadingIcon: const Padding(
          padding: EdgeInsets.only(left: 8.0),
          child: Icon(FluentIcons.search),
        ),
      ),
    );
  }
}
