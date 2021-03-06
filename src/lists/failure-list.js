import { computed } from 'vue'

const windowWidth = computed(() => {
  return document.documentElement.clientWidth
})

export function currentList () {
  const failureList = computed(() => {
    if (windowWidth.value > 650) {
      return [
        {
          text: 'Разрешение вопроса с кредиторами, которые подают исковое заявление в суд на возврат долгов с вашей компании, далее происходит составление документов для ликвидации (протокол собрания учредителей, форма 15001,16001); Далее публикация в Вестнике (оплата госпошлины от 1500 в зависимости от символов).',
          time: 'до 2-х недель'
        },
        {
          text: 'Подготовка заявления в Арбитражный суд о признании должника банкротом',
          time: '7 дней'
        },
        {
          text: 'Оплата государственной пошлины, приложение документов к заявлению в АС',
          time: '1 день'
        },
        {
          text: 'Решение о признании должника банкротом. Утверждение конкурсного управляющего. Публикация в официальном издании. Направление уведомлений (7-8 шт.) ; направление запросов в государственные органы (23 шт.).',
          time: 'до 15 дней'
        },
        {
          text: 'Принятие заявлений кредиторов о включении в РТК. Составление и ведение реестра требования кредиторов.',
          time: '2 месяца'
        },
        {
          text: 'Публикации в ЕФРСБ о кредиторах, об инвентаризации, оценке, собраниях.',
          time: '1 день'
        },
        {
          text: 'При необходимости - Подготовка, проведение собрания работников, бывших работников, кредиторов.',
          time: '1 день'
        },
        {
          text: 'Сбор информации об имуществе, проведение инвентаризации имущества должника, при наличии имущества – оценка имущества.',
          time: 'в течение всей процедуры'
        },
        {
          text: 'Оспаривание сделок Должника (при их наличии).',
          time: 'в течение всей процедуры'
        },
        {
          text: 'Расчеты с кредиторами согласно РТК (при наличии денежных средств).',
          time: 'в течение всей процедуры'
        },
        {
          text: 'Завершение процедуры. Составление отчета о завершении процедуры банкротства. Получение определения о прекращении конкурсного производства.',
          time: '7-10 дней'
        }
      ]
    } else {
      return [
        {
          text: 'Трудности со сбором доказательств , подтверждающих наличие и сумму долга;',
          time: '01'
        },
        {
          text: 'Неграмотное оформление искового заявления и, как следствие, отказ в судебном иске;',
          time: '02'
        },
        {
          text: 'Проволочки во времени по инициативе ответчика, искусственное затягивание процесса с целью уклонения от выплаты долга;',
          time: '03'
        },
        {
          text: 'Непрофессиональная и затяжная работа службы судебных приставов по взысканию долга;',
          time: '04'
        },
        {
          text: 'Встречные иски должника о вымогательстве и, как следствие, уголовное преследование кредитора.',
          time: '05'
        },
        {
          text: 'Публикации в ЕФРСБ о кредиторах, об инвентаризации, оценке, собраниях.',
          time: '06'
        },
        {
          text: 'При необходимости - Подготовка, проведение собрания работников, бывших работников, кредиторов.',
          time: '07'
        },
        {
          text: 'Сбор информации об имуществе, проведение инвентаризации имущества должника, при наличии имущества – оценка имущества.',
          time: '08'
        },
        {
          text: 'Оспаривание сделок Должника (при их наличии).',
          time: '09'
        },
        {
          text: 'Расчеты с кредиторами согласно РТК (при наличии денежных средств).',
          time: '10'
        },
        {
          text: 'Завершение процедуры. Составление отчета о завершении процедуры банкротства. Получение определения о прекращении конкурсного производства.',
          time: '11'
        }
      ]
    }
  })

  return { failureList }
}
