import 'package:flutter_riverpod/flutter_riverpod.dart';

class PageNotifier extends StateNotifier<int> {
  PageNotifier() : super(0);

  setNav(int index) {
    state = index;
  }
}

final pageProvider = StateNotifierProvider<PageNotifier, int>((ref) => PageNotifier());