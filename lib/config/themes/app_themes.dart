import "package:fluent_ui/fluent_ui.dart";
import "package:system_theme/system_theme.dart";

import './colors.dart';

final accentColor = SystemTheme.accentColor.accent.toAccentColor();

final FluentThemeData lightTheme = FluentThemeData(
  brightness: Brightness.light,
  accentColor: accentColor,
  scaffoldBackgroundColor: lightBackgroundAccent,
  cardColor: lightBackgroundAccent,
);

final FluentThemeData darkTheme = FluentThemeData(
  brightness: Brightness.dark,
  accentColor: accentColor,
  scaffoldBackgroundColor: darkBackground,
  cardColor: darkBackgroundAccent,
  fontFamily: "Quicksand",
  buttonTheme: ButtonThemeData.all(ButtonStyle(
    textStyle: ButtonState.all<TextStyle>(
      const TextStyle(
        fontWeight: FontWeight.bold,
      ),
    ),
  )),
);
