import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/app.dart';

class Home extends ConsumerWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      child: ScrollConfiguration(
        behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
        child: ListView(
          children: const [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      SearchBox(),
                      largeWidth,
                      FilterButton(),
                    ],
                  ),
                ),
                RefreshButton()
              ],
            ),
            largeHeight,
            PatientTable()
          ],
        ),
      ),
    );
  }
}
