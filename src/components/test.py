import re

def extract_sizes(css_text):
    # Изменено регулярное выражение для соответствия стандартному CSS
    regex = r"(width|left):\s*(\d+)px"
    matches = re.finditer(regex, css_text, re.MULTILINE)
    results = []

    for match in matches:
        property_name = match.group(1)
        value = int(match.group(2))
        percentage = round((value / 1440) * 100, 2)  # Округляем до двух десятичных знаков

        # Адаптация вывода под Tailwind CSS
        if property_name == "width":
            tailwind_class = f"w-[{percentage}%]"  # Пример: w-[66.18%]
        elif property_name == "left":
            tailwind_class = f"left-[{percentage}%]"  # Пример: left-[25.35%]

        results.append(tailwind_class)

    return results

# Пример использования
css_text = """
  /* Frame 2888 */

position: absolute;
width: 360px;
height: 377px;
left: 0px;
bottom: 0px;

/* GREEN 0 */
background: #0D0D0D;

"""

results = extract_sizes(css_text)
for result in results:
    print(result)
