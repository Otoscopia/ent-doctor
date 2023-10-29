import 'package:ent_doctors/feature/app/presentation/pages/home.dart';
import 'package:fluent_ui/fluent_ui.dart';

List<NavigationPaneItem> items = [
  PaneItem(
    icon: const Icon(FluentIcons.home),
    title: const Text('Dashboard'),
    body: const Center(child: Text("Dashboard")),
  ),
  PaneItemSeparator(),
  PaneItem(
    icon: const Icon(FluentIcons.issue_tracking),
    title: const Text('Track orders'),
    infoBadge: const InfoBadge(source: Text('8')),
    body: const Center(child: Text("Track orders")),
  ),
  PaneItem(
    icon: const Icon(FluentIcons.disable_updates),
    title: const Text('Disabled Item'),
    body: const Center(child: Text("Disabled Item")),
    enabled: false,
  ),
  PaneItemExpander(
    icon: const Icon(FluentIcons.account_management),
    title: const Text('Account'),
    body: const Center(child: Text("Account")),
    items: [
      PaneItemHeader(header: const Text('Apps')),
      PaneItem(
        icon: const Icon(FluentIcons.mail),
        title: const Text('Mail'),
        body: const Center(child: Text("Mail")),
      ),
      PaneItem(
        icon: const Icon(FluentIcons.calendar),
        title: const Text('Calendar'),
        body: const Center(child: Text("Calender")),
      ),
    ],
  ),
];

List<Tab> tabs = [
  Tab(text: const Text("Home"), body: const Home(), closeIcon: null),
  Tab(
    text: const Text("Patient Information"),
    body: const Center(child: Text("Patient Information")),
  ),
  Tab(
    text: const Text("Print"),
    body: const Center(child: Text("Print")),
  ),
];
