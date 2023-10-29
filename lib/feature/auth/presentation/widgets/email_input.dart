import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/auth/presentation/riverpod/inputs/email_provider.dart';

class EmailInput extends ConsumerWidget {
  const EmailInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return InfoLabel(
      label: emailAddressText,
      child: TextFormBox(
        placeholder: emailAddressLabel,
        expands: false,
        onChanged: (value) => ref.watch(emailProvider.notifier).setEmail(value),
        autovalidateMode: AutovalidateMode.onUserInteraction,
        validator: (value) {
          if (!(value!.contains('@') && value.contains('.'))) {
            return emailAddressError;
          }
          return null;
        },
      ),
    );
  }
}
