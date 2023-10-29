import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:styled_widget/styled_widget.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/presentation/widgets/widgets.dart';

class PrivacyAndPolicy extends ConsumerWidget {
  const PrivacyAndPolicy({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      child: ScrollConfiguration(
        behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
        child: ListView(
          children: [
            Text(policyTitle, style: FluentTheme.of(context).typography.title),
            smallHeight,
            const Text(policy),
            mediumHeight,
            Column(children: policies.map((pap) => PrivacyAndPolicyText(title: pap['title']!, description: pap['description']!)).toList()),
            largeHeight,
            const Divider(),
            largeHeight,
            Text(privacyTitle, style: FluentTheme.of(context).typography.title),
            smallHeight,
            const Text(privacy),
            mediumHeight,
            Column(children: privacies.map((pap) => PrivacyAndPolicyText(title: pap['title']!, description: pap['description']!)).toList()),
            mediumHeight,
            Text(privacyAcknowledgeTitle, style: FluentTheme.of(context).typography.body),
            mediumHeight,
            Text(privacyUpdatedTitle, style: FluentTheme.of(context).typography.body).italic(),
          ],
        ),
      ),
    );
  }
}
