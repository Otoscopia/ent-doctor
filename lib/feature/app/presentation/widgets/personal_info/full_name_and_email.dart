import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/auth/presentation/presentation.dart';

class FullNameAndEmail extends ConsumerWidget {
  const FullNameAndEmail({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Row(
      children: [
        Expanded(
          child: InfoLabel(
            label: fullNameText,
            child: TextFormBox(
              placeholder: fullNameHintText,
              expands: false,
              autovalidateMode: AutovalidateMode.onUserInteraction,
            ),
          ),
        ),
        largeWidth,
        const Expanded(child: EmailInput())
      ],
    );
  }
}
