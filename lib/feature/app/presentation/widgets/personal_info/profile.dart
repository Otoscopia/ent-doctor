import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:styled_widget/styled_widget.dart';

class ProfileContainer extends ConsumerWidget {
  const ProfileContainer({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              ClipOval(child: SvgPicture.asset('default-profile.svg', width: 100, height: 100, fit: BoxFit.cover)),
              mediumHeight,
              Text(profilePictureText, style: FluentTheme.of(context).typography.bodyStrong),
              mediumHeight,
              Text(profilePictureFileTypeText, style: FluentTheme.of(context).typography.caption),
            ],
          ),
        ),
        FilledButton(
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(FluentIcons.cloud_upload),
              mediumWidth,
              const Text(uploadProfilePictureText).fontWeight(FontWeight.w500),
            ],
          ),
          onPressed: () {},
        )
      ],
    );
  }
}
