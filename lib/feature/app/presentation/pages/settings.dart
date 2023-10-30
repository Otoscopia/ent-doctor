import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/app.dart';

class Settings extends ConsumerWidget {
  const Settings({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return NavigationView(
      appBar: const NavigationAppBar(
          title: Padding(padding: EdgeInsets.only(top: 12), child: Text(settingsTitle),),
          automaticallyImplyLeading: false,
          leading: Padding(padding: EdgeInsets.only(top: 12), child: Icon(FluentIcons.settings))),
      pane: NavigationPane(
        selected: ref.watch(settingsPageProvider),
        onChanged: (index) => ref.read(settingsPageProvider.notifier).setSettingsNav(index),
        displayMode: PaneDisplayMode.top,
        items: settingsTabs,
      ),
    );
  }
}

