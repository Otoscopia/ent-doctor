import 'package:flutter_riverpod/flutter_riverpod.dart';

class SettingsPageNotifier extends StateNotifier<int> {
  SettingsPageNotifier() : super(0);

  setSettingsNav(int index) {
    state = index;
  }
}

final settingsPageProvider =
    StateNotifierProvider<SettingsPageNotifier, int>((ref) => SettingsPageNotifier());