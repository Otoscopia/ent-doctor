import 'package:flutter_riverpod/flutter_riverpod.dart';

class FilterTableNotifier extends StateNotifier<String> {
  FilterTableNotifier() : super("Default");

  setFilter(String value) {
    state = value;
  }
}

final filterTableProvider =
    StateNotifierProvider<FilterTableNotifier, String>((ref) {
  return FilterTableNotifier();
});