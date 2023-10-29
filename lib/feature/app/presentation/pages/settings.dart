import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/presentation/riverpod/riverpod.dart';
import 'package:ent_doctors/feature/app/presentation/pages/pages.dart';

class Settings extends ConsumerWidget {
  const Settings({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return NavigationView(
      appBar: const NavigationAppBar(
          title: Text(settingsTitle),
          automaticallyImplyLeading: false,
          leading: Icon(FluentIcons.settings)),
      pane: NavigationPane(
        selected: ref.watch(settingsPageProvider),
        onChanged: (index) => ref.read(settingsPageProvider.notifier).setSettingsNav(index),
        displayMode: PaneDisplayMode.auto,
        items: [
          PaneItemSeparator(),
          PaneItem(
            icon: const Icon(FluentIcons.default_settings),
            title: const Text(generalTitle),
            body: const GeneralSettings()
          ),
          PaneItemSeparator(),
          PaneItem(
            icon: const Icon(FluentIcons.player_settings),
            title: const Text(personalInfoTitle),
            body: const PersonalInfo(),
          ),
          PaneItemSeparator(),
          PaneItem(
            icon: const Icon(FluentIcons.settings_secure),
            title: const Text(privacyAndPolicyTitle),
            body: const PrivacyAndPolicy(),
          ),
        ],
      ),
    );
  }
}

