import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:ent_doctors/core/core.dart';
import 'package:ent_doctors/feature/app/presentation/widgets/widgets.dart';

class PersonalInfo extends ConsumerWidget {
  const PersonalInfo({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Card(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Text(personalInformationTitle,
              style: FluentTheme.of(context).typography.title),
          mediumHeight,
          const Text(updateProfileText),
          mediumHeight,
          const Divider(),
          largeHeight,
          const ProfileContainer(),
          largeHeight,
          const Divider(),
          largeHeight,
          const FullNameAndEmail(),
          largeHeight,
          const Divider(),
          largeHeight,
          const PhoneAndWork(),
          largeHeight,
          const UpdateButton()
        ],
      ),
    );
  }
}
