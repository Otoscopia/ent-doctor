import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class TextTitle extends ConsumerWidget {
  final String text;
  const TextTitle({super.key, required this.text});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text(text, style: FluentTheme.of(context).typography.title);
  }
}

class TextBodyLarge extends ConsumerWidget {
  final String text;
  const TextBodyLarge({super.key, required this.text});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text(text, style: FluentTheme.of(context).typography.bodyLarge);
  }
}

class TextBodyStrong extends ConsumerWidget {
  final String text;
  const TextBodyStrong({super.key, required this.text});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text(text, style: FluentTheme.of(context).typography.bodyStrong);
  }
}

class TextBody extends ConsumerWidget {
  final String text;
  const TextBody({super.key, required this.text});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text(text, style: FluentTheme.of(context).typography.body);
  }
}

class TextCaption extends ConsumerWidget {
  final String text;
  const TextCaption({super.key, required this.text});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text(text, style: FluentTheme.of(context).typography.body);
  }
}

class TextRich extends ConsumerWidget {
  final String title, value;
  const TextRich({super.key, required this.title, required this.value});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text.rich(
      TextSpan(
        text: title,
        children: [
          TextSpan(
            text: value,
            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
        ],
      ),
    );
  }
}
