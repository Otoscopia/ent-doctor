import 'package:ent_doctors/feature/app/app.dart';
import 'package:fluent_ui/fluent_ui.dart';

const String pageTitle = 'Otoscopia';
const String dashboardText = 'Otoscopia';
const String patientText = 'Patients';

List<Tab> tabs = [
  Tab(text: const Text("Home"), body: const Home(), closeIcon: null),
];

List<NavigationPaneItem> footerItems = [
  PaneItemSeparator(),
  PaneItem(
    icon: const Icon(FluentIcons.settings),
    title: const Text('Settings'),
    body: const Settings(),
  ),
];

