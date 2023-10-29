import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:styled_widget/styled_widget.dart';

class UpdateButton extends ConsumerWidget {
  const UpdateButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FilledButton(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(FluentIcons.check_mark),
                mediumWidth,
                const Text(updateButtonText).fontWeight(FontWeight.w500),
              ],
            ),
            onPressed: () {},
          )
        ],
      ),
    );
  }
}
