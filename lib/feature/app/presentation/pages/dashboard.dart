import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/app.dart';

class Dashboard extends ConsumerWidget {
  const Dashboard({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ApplicationContainer(
      child: NavigationView(
        appBar: const NavigationAppBar(
          title: Text(pageTitle),
          automaticallyImplyLeading: false,
        ),
        pane: NavigationPane(
          selected: ref.watch(pageProvider),
          onChanged: (index) => ref.read(pageProvider.notifier).setNav(index),
          displayMode: PaneDisplayMode.auto,
          items: [
            PaneItem(
              icon: const Icon(FluentIcons.home),
              title: const Text(dashboardText),
              body: TabView(
                tabs: tabs,
                currentIndex: ref.watch(tabProvider).current,
                onChanged: (index) =>
                    ref.read(tabProvider.notifier).setTab(index),
                tabWidthBehavior: TabWidthBehavior.equal,
                closeButtonVisibility: CloseButtonVisibilityMode.always,
                showScrollButtons: true,
                onReorder: (oldIndex, newIndex) {
                  ref
                      .read(tabProvider.notifier)
                      .setTabOrder(oldIndex, newIndex);
                },
              ),
            ),
            PaneItemSeparator(),
            PaneItem(
              icon: const Icon(FluentIcons.issue_tracking),
              title: const Text(patientText),
              body: const Center(child: Text(patientText)),
            ),
          ],
          footerItems: footerItems
        ),
      ),
    );
  }
}
