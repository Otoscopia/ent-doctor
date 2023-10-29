import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';

class PrivacyAndPolicyText extends ConsumerWidget {
  final String title, description;
  const PrivacyAndPolicyText(
      {super.key, required this.title, required this.description});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: FluentTheme.of(context).typography.bodyStrong),
        Text(description, style: FluentTheme.of(context).typography.body),
        mediumHeight,
      ],
    );
  }
}
