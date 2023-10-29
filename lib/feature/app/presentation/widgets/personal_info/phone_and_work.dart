import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';

class PhoneAndWork extends ConsumerWidget {
  const PhoneAndWork({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Row(
      children: [
        Expanded(
          child: InfoLabel(
            label: phoneNumberText,
            child: TextFormBox(
              placeholder: phoneNumberHintText,
              expands: false,
              autovalidateMode: AutovalidateMode.onUserInteraction,
            ),
          ),
        ),
        largeWidth,
        Expanded(
          child: InfoLabel(
            label: workAddressText,
            child: TextFormBox(
              placeholder: workAddressHintText,
              expands: false,
              autovalidateMode: AutovalidateMode.onUserInteraction,
            ),
          ),
        ),
      ],
    );
  }
}
