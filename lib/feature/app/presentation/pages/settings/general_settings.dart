import 'package:ent_doctors/core/core.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:styled_widget/styled_widget.dart';

class GeneralSettings extends ConsumerWidget {
  const GeneralSettings({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      child: ListView(
        // crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const TextTitle(text: general),
          largeHeight,
          const Divider(),
          largeHeight,
          const TextBodyStrong(text: notification),
          mediumHeight,
          Checkbox(
              checked: false,
              onChanged: (value) {},
              content: const TextBody(text: notifyNewPatient)),
          smallHeight,
          Checkbox(
              checked: false,
              onChanged: (value) {},
              content: const TextBody(text: notifyNewRecord)),
          smallHeight,
          Checkbox(
              checked: false,
              onChanged: (value) {},
              content: const Text(notifyNewUpdate)),
          largeHeight,
          Text(updateText,
              style: FluentTheme.of(context).typography.bodyStrong),
          largeHeight,
          Text(appearanceText,
              style: FluentTheme.of(context).typography.bodyStrong),
          smallHeight,
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(themeText,
                            style: FluentTheme.of(context).typography.caption)
                        .bold(),
                    Text(themeTextSubtitle,
                        style: FluentTheme.of(context).typography.caption),
                  ],
                ),
              ),
              DropDownButton(
                title: const Text(themeText),
                items: [
                  MenuFlyoutItem(
                      text: const Text(themeLightText), onPressed: () {}),
                  MenuFlyoutItem(
                      text: const Text(themeDarkText), onPressed: () {}),
                  MenuFlyoutItem(
                      text: const Text(themeSystemText), onPressed: () {}),
                ],
              )
            ],
          ),
          smallHeight,
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    TextCaption(text: accentColorText),
                    TextCaption(text: customizeAccentColorText),
                  ],
                ),
              ),
              DropDownButton(
                title: const Text(accentColorCurrent),
                items: Colors.accentColors.map(
                  (color) {
                    return MenuFlyoutItem(
                      leading: Container(width: 32, height: 32, color: color),
                      text: Text(color.toString()),
                      onPressed: () {},
                    );
                  },
                ).toList(),
              ),
            ],
          ),
          largeHeight,
          const TextBodyStrong(text: authentication),
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const TextCaption(text: languageSubtitleText),
              DropDownButton(
                title: const Text(languageCurrent),
                items: Colors.accentColors.map(
                  (color) {
                    return MenuFlyoutItem(
                      leading: Container(width: 32, height: 32, color: color),
                      text: Text(color.toString()),
                      onPressed: () {},
                    );
                  },
                ).toList(),
              ),
            ],
          ),
          largeHeight,
          const TextBodyStrong(text: authentication),
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const TextCaption(text: applicationSecure),
              ToggleSwitch(checked: true, onChanged: (value) {})
            ],
          ),
        ],
      ),
    );
  }
}
