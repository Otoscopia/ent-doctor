import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/auth/presentation/presentation.dart';

class SignIn extends ConsumerWidget {
  const SignIn({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return ApplicationContainer(
      child: Center(
        child: SizedBox(
          width: 350,
          child: Card(
            child: ScrollConfiguration(
              behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
              child: const SingleChildScrollView(
                child: Form(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Logo(),
                      largeHeight,
                      EmailInput(),
                      largeHeight,
                      PasswordInput(),
                      largeHeight,
                      SignInButton()
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
    