import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';

class ScreeningImages extends ConsumerWidget {
  const ScreeningImages({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        TextBodyStrong(text: leftImagesText),
        largeHeight,
        TextBodyStrong(text: rightImagesText),
      ],
    );
  }
}
