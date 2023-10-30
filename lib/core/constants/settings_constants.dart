import 'package:fluent_ui/fluent_ui.dart';
import 'package:ent_doctors/feature/app/app.dart';

const String settingsTitle = 'Settings';
const String generalTitle = 'General';
const String personalInfoTitle = 'Personal Info';
const String privacyAndPolicyTitle = 'Privacy & Policy';

List<NavigationPaneItem> settingsTabs = [
  PaneItem(
      icon: const Icon(FluentIcons.default_settings),
      title: const Text(generalTitle),
      body: const GeneralSettings()),
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
];
