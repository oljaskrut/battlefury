<script>
  export let date
  import dayjs from "dayjs"
  import isToday from "dayjs/plugin/isToday.js"
  import isYesterday from "dayjs/plugin/isYesterday.js"
  dayjs.extend(isYesterday)
  dayjs.extend(isToday)
  function format(dt) {
    const d = dayjs(dt)
    if (d.isToday()) {
      return d.format("Сегодня")
    }
    if (d.isYesterday()) {
      return d.format("Вчера")
    }
    return d.format("DD.MM")
  }
</script>

<time datetime={date}>{format(date)}</time>
