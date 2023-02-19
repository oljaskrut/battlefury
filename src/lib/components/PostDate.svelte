<script>
  export let date
  import dayjs from 'dayjs'
  import isToday from 'dayjs/plugin/isToday.js'
  import isYesterday from 'dayjs/plugin/isYesterday.js'
  dayjs.extend(isYesterday)
  dayjs.extend(isToday)
  function format(dt) {
    const d = dayjs(dt)
    if (d.isToday()) {
      return d.format('Сегодня, HH:mm')
    }
    if (d.isYesterday()) {
      return d.format('Вчера, HH:mm')
    }
    return d.format('DD.MM, HH:mm')
  }
</script>

<time datetime={date}>{format(date)}</time>
