import "package:fluent_ui/fluent_ui.dart";
import "package:system_theme/system_theme.dart";

import './colors.dart';

final accentColor = SystemTheme.accentColor.accent.toAccentColor();

final FluentThemeData lightTheme = FluentThemeData(
  brightness: Brightness.light,
  accentColor: accentColor,
  scaffoldBackgroundColor: lightBackgroundAccent,
  cardColor: lightBackgroundAccent,
  typography: Typography.raw(
    display: DarkTextStyles().display,
    titleLarge: DarkTextStyles().titleLarge,
    title: DarkTextStyles().title,
    subtitle: DarkTextStyles().subtitle,
    bodyLarge: DarkTextStyles().bodyLarge,
    bodyStrong: DarkTextStyles().bodyStrong,
    body: DarkTextStyles().body,
    caption: DarkTextStyles().caption,
  ),
);

final FluentThemeData darkTheme = FluentThemeData(
  brightness: Brightness.dark,
  accentColor: accentColor,
  scaffoldBackgroundColor: darkBackground,
  cardColor: darkBackgroundAccent,
  fontFamily: "Quicksand",
  typography: Typography.raw(
    display: LightTextStyles().display,
    titleLarge: LightTextStyles().titleLarge,
    title: LightTextStyles().title,
    subtitle: LightTextStyles().subtitle,
    bodyLarge: LightTextStyles().bodyLarge,
    bodyStrong: LightTextStyles().bodyStrong,
    body: LightTextStyles().body,
    caption: LightTextStyles().caption,
  ),
);

class DarkTextStyles {
  final display = const TextStyle(
    fontSize: 72,
    color: Color(0xE4000000),
    fontWeight: FontWeight.w600,
  );
  final titleLarge = const TextStyle(
    fontSize: 44,
    color: Color(0xE4000000),
    fontWeight: FontWeight.w600,
  );
  final title = const TextStyle(
    fontSize: 32,
    color: Color(0xE4000000),
    fontWeight: FontWeight.w600,
  );
  final subtitle = const TextStyle(
    fontSize: 24,
    color: Color(0xE4000000),
    fontWeight: FontWeight.w600,
  );
  final bodyLarge = const TextStyle(
    fontSize: 22,
    color: Color(0xE4000000),
    fontWeight: FontWeight.normal,
  );
  final bodyStrong = const TextStyle(
    fontSize: 18,
    color: Color(0xE4000000),
    fontWeight: FontWeight.w600,
  );
  final body = const TextStyle(
    fontSize: 18,
    color: Color(0xE4000000),
    fontWeight: FontWeight.normal,
  );
  final caption = const TextStyle(
    fontSize: 16,
    color: Color(0xE4000000),
    fontWeight: FontWeight.normal,
  );
}

class LightTextStyles {
  final display = const TextStyle(
    fontSize: 72,
    color: Colors.white,
    fontWeight: FontWeight.w600,
  );

  final titleLarge = const TextStyle(
    fontSize: 44,
    color: Colors.white,
    fontWeight: FontWeight.w600,
  );
  final title = const TextStyle(
    fontSize: 32,
    color: Colors.white,
    fontWeight: FontWeight.w600,
  );
  final subtitle = const TextStyle(
    fontSize: 24,
    color: Colors.white,
    fontWeight: FontWeight.w600,
  );
  final bodyLarge = const TextStyle(
    fontSize: 22,
    color: Colors.white,
    fontWeight: FontWeight.normal,
  );
  final bodyStrong = const TextStyle(
    fontSize: 18,
    color: Colors.white,
    fontWeight: FontWeight.w600,
  );
  final body = const TextStyle(
    fontSize: 18,
    color: Colors.white,
    fontWeight: FontWeight.normal,
  );
  final caption = const TextStyle(
    fontSize: 16,
    color: Colors.white,
    fontWeight: FontWeight.normal,
  );
}
