import 'package:ent_doctors/core/constants/sign_in_constants.dart';
import 'package:ent_doctors/feature/app/app.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:styled_widget/styled_widget.dart';

class SignInButton extends ConsumerWidget {
  const SignInButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return SizedBox(
      width: 150,
      child: FilledButton(
          child: const Text(signInText).fontWeight(FontWeight.w500),
          onPressed: () => Navigator.push(context, FluentPageRoute(builder: (context) => const Dashboard()))),
    );
  }
}
