import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/auth/presentation/riverpod/inputs/password_provider.dart';

class PasswordInput extends ConsumerWidget {
  const PasswordInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return InfoLabel(
      label: passwordText,
      child: PasswordBox(
        placeholder: passwordLabel,
        onChanged: (value) => ref.watch(passwordProvider.notifier).setPassword(value),
      ),
    );
  }
}
