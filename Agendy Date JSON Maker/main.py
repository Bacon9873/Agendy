import json

dates = {}
with open('Calendar.txt', 'r') as file:
    while True:
        date_line = file.readline()
        if date_line == '':
            break
        elif ("DATE" in date_line and "2022" in date_line) or ("DATE" in date_line and "2023" in date_line):
            found_day = False
            date = date_line[19:27]
            print(date)
            while not found_day:
                day_line = file.readline()
                if ('1' in day_line and 'SUMMARY' in day_line) or ('2' in day_line and 'SUMMARY' in day_line) or ('3' in day_line and 'SUMMARY' in day_line) or ('4' in day_line and 'SUMMARY' in day_line):
                    day = day_line[8:9]
                    print(day)
                    if day == '1' or day == '2' or day == '3' or day == '4':
                        dates[date] = day
                    found_day = True


# Serializing json
json_object = json.dumps(dates, indent=4)

# Writing to sample.json
with open("dates.json", "w") as outfile:
    outfile.write(json_object)
