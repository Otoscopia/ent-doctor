import 'package:fluent_ui/fluent_ui.dart';

import 'package:ent_doctors/core/core.dart';

import 'vitals_card.dart';

class VitalsContainer extends StatelessWidget {
  final List<String> values;
  const VitalsContainer({super.key, required this.values});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const TextBodyStrong(text: vitalsTitle),
          smallHeight,
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              VitalsCard(icon: icons[0], title: vitalTitles[0], subtitle: values[0]),
              VitalsCard(icon: icons[1], title: vitalTitles[1], subtitle: values[1]),
              VitalsCard(icon: icons[2], title: vitalTitles[2], subtitle: values[2]),
            ],
          ),
        ],
      ),
    );
  }
}
