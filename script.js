// Array de versículos bíblicos
var versiculos = [
    "Isaías 41:10 - 'No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré, ciertamente te ayudaré, sí, te sostendré con mi diestra victoriosa.'",
    "Filipenses 4:13 - 'Todo lo puedo en aquel que me conforta.'",
    "Jeremías 29:11 - 'Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.'",
    "Mateo 11:28-30 - 'Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso. Carguen con mi yugo y aprendan de mí, porque soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga liviana.'",
    "Romanos 8:28 - 'Y sabemos que en todas las cosas interviene Dios para bien de los que lo aman, de aquellos que han sido llamados conforme a su designio.'",
    "Salmo 23:1-4 - 'El Señor es mi pastor, nada me falta; en verdes pastos me hace descansar. Junto a tranquilas aguas me conduce; me infunde nuevas fuerzas. Me guía por sendas de justicia por amor a su nombre. Aunque pase por el oscuro valle de la muerte, no temeré, porque tú estás conmigo; tu vara y tu cayado me infunden aliento.'",
    "2 Corintios 4:16-18 - 'Por eso, no nos desanimamos. Al contrario, aunque por fuera nos vamos desgastando, por dentro nos vamos renovando día tras día. Porque los sufrimientos ligeros y efímeros que padecemos producen para nosotros una gloria eterna que supera toda comparación. Así que no ponemos la mirada en lo que se ve, sino en lo que no se ve, ya que lo que se ve es pasajero, mientras que lo que no se ve es eterno.'",
    "Mateo 6:25-27 - 'Por eso les digo: No se inquieten por su vida, pensando qué van a comer o qué van a beber, ni por su cuerpo, pensando con qué se van a vestir. ¿No vale acaso más la vida que el alimento, y el cuerpo más que el vestido? Miren las aves del cielo: no siembran ni cosechan, ni guardan el alimento en graneros, y sin embargo, el Padre que está en el cielo las alimenta. ¿No valen ustedes acaso mucho más que ellas?'",
    "Mateo 19:26 - 'Para los hombres esto es imposible, pero para Dios todo es posible.'",
    "Juan 14:27 - 'La paz les dejo, mi paz les doy; no se la doy como la da el mundo. No se inquieten ni se acobarden.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz al creer, para que rebosen de esperanza por el poder del Espíritu Santo.'",
    "1 Corintios 16:13 - 'Velen, estén firmes en la fe, sean varones, sean constantes, sean fuertes.'",
    "2 Timoteo 1:7 - 'Porque no nos ha dado Dios un espíritu de timidez, sino de fortaleza, de amor y de prudencia.'",
    "Hebreos 13:5-6 - 'Manténganse libres del amor al dinero, y conténtense con lo que tienen, porque Dios ha dicho: 'Nunca te dejaré; jamás te abandonaré'. Por eso podemos decir con confianza: 'El Señor es quien me ayuda; no temeré. ¿Qué puede hacerme el hombre?'",
    "Mateo 28:20 - 'Y enseñen a cumplir todo lo que yo les he mandado. Yo estoy con ustedes todos los días hasta el fin del mundo.'",
    "Juan 3:16 - 'Porque tanto amó Dios al mundo, que entregó a su Hijo único, para que todo el que crea en él no perezca, sino que tenga vida eterna.'",
    "Romanos 8:38-39 - 'Estoy convencido de que ni la muerte, ni la vida, ni los ángeles, ni los principados, ni lo presente, ni lo futuro, ni las potestades, ni la altura, ni la profundidad, ni ninguna otra criatura podrá separarnos del amor de Dios, que es en Cristo Jesús, Señor nuestro.'",
    "1 Corintios 13:4-7 - 'El amor es paciente, es servicial; el amor no es envidioso, no hace alarde, no se envanece, no procede con bajeza, no busca su propio interés, no se irrita, no tiene en cuenta el mal recibido, no se alegra de la injusticia, sino que se regocija con la verdad. El amor todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta.'",
    "Gálatas 5:22-23 - 'En cambio, los frutos del Espíritu son amor, alegría, paz, paciencia, afabilidad, bondad, fidelidad, mansedumbre, dominio de sí; contra tales cosas no hay ley.'",
    "Efesios 3:16-17 - 'Pido que Él les conceda, conforme a la riqueza de su gloria, ser robustecidos con fuerza por su Espíritu en el hombre interior, que habite Cristo por la fe en sus corazones, y arraigados y cimentados en el amor.'",
    "1 Pedro 5:7 - 'Descarguen en Él todas sus preocupaciones, ya que Él se interesa por ustedes.'",
    "Mateo 5:14-16 - 'Ustedes son la luz del mundo. No se puede ocultar una ciudad construida en lo alto de un monte. Tampoco se enciende una lámpara para meterla debajo de un cajón, sino para ponerla sobre el candelero y que alumbre a todos los que están en la casa. Así debe brillar la luz de ustedes delante de los hombres, para que vean sus buenas obras y glorifiquen al Padre que está en los cielos.'",
    "Juan 8:12 - 'Yo soy la luz del mundo. El que me sigue no caminará en la oscuridad, sino que tendrá la luz de la vida.'",
    "Romanos 12:12 - 'Alégrense en la esperanza, muestren paciencia en el sufrimiento, perseveren en la oración.'",
    "2 Corintios 5:7 - 'Porque caminamos por fe, no por vista.'",
    "Filipenses 4:6-7 - 'No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios y denle gracias. Y la paz de Dios, que sobrepasa todo entendimiento, cuidará sus corazones y sus pensamientos en Cristo Jesús.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús.'",
    "Santiago 1:2-4 - 'Hermanos míos, considérense muy dichosos cuando tengan que enfrentarse con diversas pruebas, sabiendo que la prueba de su fe produce constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "Proverbios 3:5-6 - 'Confía en el Señor con todo tu corazón, y no te apoyes en tu propio entendimiento; reconócelo en todos tus caminos, y él enderezará tus veredas.'",
    "Isaías 40:31 - 'Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.'",
    "Jeremías 17:7-8 - 'Bendito el hombre que confía en el Señor, y pone en el Señor su confianza. Será como un árbol plantado junto al agua, que extiende sus raíces hacia la corriente; no teme cuando llega el calor, y sus hojas están siempre verdes; en época de sequía no se preocupa, y nunca deja de dar fruto.'",
    "Mateo 6:33 - 'Busquen primero el Reino de Dios y su justicia, y todo lo demás les será añadido.'",
    "Juan 14:1 - 'No se inquieten. Crean en Dios y crean también en mí.'",
    "Romanos 15:4 - 'Porque todo lo que fue escrito en tiempos pasados, fue escrito para enseñarnos, a fin de que, mediante la paciencia y el consuelo que dan las Escrituras, mantengamos la esperanza.'",
    "2 Corintios 12:9-10 - 'Pero él me dijo: 'Mi gracia es suficiente para ti, pues mi poder se perfecciona en la debilidad'. Por eso, me glorío aún más de mis debilidades, para que el poder de Cristo habite en mí. Por eso, por amor a Cristo, me complazco en las debilidades, en insultos, en necesidades, en persecuciones, en angustias; porque cuando soy débil, entonces soy fuerte.'",
    "Gálatas 2:20 - 'Ya no vivo yo, es Cristo quien vive en mí. Lo que ahora vivo en la carne, lo vivo en la fe del Hijo de Dios, que me amó y se entregó a sí mismo por mí.'",
    "Efesios 2:8-9 - 'Porque por gracia ustedes han sido salvados mediante la fe; y esto no de ustedes, sino que es don de Dios. No es por obras, para que nadie se gloríe.'",
    "Colosenses 3:12 - 'Como escogidos de Dios, santos y amados, vístanse de entrañas de misericordia, de bondad, humildad, mansedumbre y paciencia.'",
    "1 Juan 4:18 - 'El amor no admite miedo, al contrario, el amor perfecto expulsa el miedo. Porque el miedo supone castigo, y el que tiene miedo no ha llegado a la plenitud del amor.'",
    "Santiago 1:17 - 'Toda buena dádiva y todo don perfecto descienden de lo alto, donde está el Padre que creó las lumbreras celestes, y no cambia como los astros ni se eclipsa por sombra alguna.'",
    "1 Pedro 1:3-5 - 'Bendito sea Dios, Padre de nuestro Señor Jesucristo, que en su gran misericordia, por la resurrección de Jesucristo de entre los muertos, nos ha hecho nacer de nuevo para una esperanza viva, para una herencia incorruptible, inmaculada e imperecedera, reservada en el cielo para ustedes, que están guardados por el poder de Dios mediante la fe, para la salvación que está preparada para ser revelada en el último tiempo.'",
    "Apocalipsis 21:4 - 'Él enjugará toda lágrima de sus ojos, y ya no habrá muerte, ni habrá más duelo, ni clamor, ni dolor, porque las primeras cosas han pasado.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que el vestido? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡anímense! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "Proverbios 3:6 - 'Reconócelo en todos tus caminos, y él enderezará tus veredas.'",
    "Isaías 40:29-31 - 'Él da fuerzas al cansado y acrecienta el vigor del débil. Los jóvenes se cansan y se fatigan, los muchachos tropiezan y caen; pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.'",
    "Jeremías 29:12-13 - 'Me buscarán y me encontrarán, si me buscan de todo corazón. Me dejaré encontrar por ustedes, dice el Señor.'",
    "Mateo 11:28 - 'Vengan a mí todos los que están fatigados y sobrecargados, y yo los aliviaré.'",
    "Lucas 11:9-10 - 'Pidan y se les dará, busquen y encontrarán, llamen y se les abrirá; porque todo el que pide recibe, el que busca encuentra y al que llama se le abrirá.'",
    "Juan 14:27 - 'La paz les dejo, mi paz les doy. No se la doy como la da el mundo. No se turbe su corazón ni tenga miedo.'",
    "Romanos 8:38-39 - 'Pues estoy convencido de que ni la muerte ni la vida, ni los ángeles ni los demonios, ni lo presente ni lo futuro, ni los poderes, ni lo alto ni lo profundo, ni cosa alguna en toda la creación podrá apartarnos del amor que Dios nos ha manifestado en Cristo Jesús, nuestro Señor.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la certeza de lo que se espera, la convicción de lo que no se ve.'",
    "Salmos 37:4 - 'Haz del Señor tu delicia, y él te concederá las peticiones de tu corazón.'",
    "Proverbios 3:5-6 - 'Confía en el Señor con todo tu corazón, y no te apoyes en tu propio entendimiento. Reconócelo en todos tus caminos, y él enderezará tus veredas.'",
    "Isaías 41:10 - 'No temas, porque yo estoy contigo; no te desalientes, porque yo soy tu Dios. Te fortaleceré, ciertamente te ayudaré, sí, te sostendré con la diestra de mi justicia.'",
    "Jeremías 29:11 - 'Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.'",
    "Mateo 6:25-27 - 'Por eso les digo: No se preocupen por su vida, qué comerán o beberán; ni por su cuerpo, cómo se vestirán. ¿No tiene la vida más valor que la comida, y el cuerpo más que la ropa? Miren las aves del cielo: no siembran ni cosechan ni almacenan en graneros; sin embargo, el Padre celestial las alimenta. ¿No valen ustedes mucho más que ellas?'",
    "Juan 14:27 - 'La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No dejen que su corazón se turbe ni tengan miedo.'",
    "Romanos 8:28 - 'Y sabemos que en todas las cosas Dios obra para el bien de quienes lo aman, de quienes han sido llamados según su propósito.'",
    "1 Corintios 13:4-7 - 'El amor es paciente, es servicial; el amor no es envidioso, no hace alarde, no se envanece, no procede con bajeza, no busca su propio interés, no se irrita, no tiene en cuenta el mal recibido, no se alegra de la injusticia, sino que se regocija con la verdad. El amor todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta.'",
    "2 Corintios 5:17 - 'Por lo tanto, el que está en Cristo es una nueva criatura; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Efesios 2:8-9 - 'Porque por gracia ustedes han sido salvados mediante la fe; y esto no de ustedes, sino que es don de Dios. No es por obras, para que nadie se gloríe.'",
    "Filipenses 4:13 - 'Todo lo puedo en aquel que me conforta.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, considérense muy dichosos cuando tengan que enfrentarse con diversas pruebas, sabiendo que la prueba de su fe produce constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus preocupaciones, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará toda lágrima de sus ojos. Ya no habrá muerte, ni llanto, ni lamento ni dolor. ¡Todo lo anterior ha desaparecido!'",
    "Isaías 40:31 - 'Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y sobrecargados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga liviana.'",
    "Juan 16:33 - 'Estas cosas les he hablado para que en mí tengan paz. En el mundo tendrán tribulación, pero ¡ánimo!: yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz al creer, para que rebosen de esperanza por el poder del Espíritu Santo.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que el vestido? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, considérense muy dichosos cuando tengan que enfrentarse con diversas pruebas, sabiendo que la prueba de su fe produce constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus preocupaciones, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará toda lágrima de sus ojos. Ya no habrá muerte, ni llanto, ni lamento ni dolor. ¡Todo lo anterior ha desaparecido!'",
    "Isaías 40:31 - 'Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y sobrecargados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga liviana.'",
    "Juan 16:33 - 'Estas cosas les he hablado para que en mí tengan paz. En el mundo tendrán tribulación, pero ¡ánimo!: yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz al creer, para que rebosen de esperanza por el poder del Espíritu Santo.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que la ropa? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, considérense muy dichosos cuando tengan que enfrentarse con diversas pruebas, sabiendo que la prueba de su fe produce constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus preocupaciones, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará toda lágrima de sus ojos. Ya no habrá muerte, ni llanto, ni lamento ni dolor. ¡Todo lo anterior ha desaparecido!'",
    "Isaías 40:31 - 'Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y sobrecargados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga liviana.'",
    "Juan 16:33 - 'Estas cosas les he hablado para que en mí tengan paz. En el mundo tendrán tribulación, pero ¡ánimo!: yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz al creer, para que rebosen de esperanza por el poder del Espíritu Santo.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que la ropa? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, considérense muy dichosos cuando tengan que enfrentarse con diversas pruebas, sabiendo que la prueba de su fe produce constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus preocupaciones, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará toda lágrima de sus ojos. Ya no habrá muerte, ni llanto, ni lamento ni dolor. ¡Todo lo anterior ha desaparecido!'",
    "Isaías 40:31 - 'Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y sobrecargados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga liviana.'",
    "Juan 16:33 - 'Estas cosas les he hablado para que en mí tengan paz. En el mundo tendrán tribulación, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz al creer, para que rebosen de esperanza por el poder del Espíritu Santo.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que la ropa? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, consideren como una gran alegría el encontrarse sometidos a diversas pruebas, pues ya saben que la virtud probada da constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus inquietudes, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará todas las lágrimas de sus ojos; ya no habrá muerte, ni luto, ni lamento, ni dolor, porque todo lo viejo ha pasado.'",
    "Isaías 40:31 - 'Los que esperan en el Señor renovarán sus fuerzas; volarán como las águilas; correrán y no se cansarán, caminarán y no se fatigarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y agobiados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga ligera.'",
    "Juan 16:33 - 'Yo les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán tribulaciones, pero ¡anímense! Yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz en su fe, para que abunden en esperanza por el poder del Espíritu Santo.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que la ropa? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, consideren como una gran alegría el encontrarse sometidos a diversas pruebas, pues ya saben que la virtud probada da constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus inquietudes, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará todas las lágrimas de sus ojos; ya no habrá muerte, ni luto, ni lamento, ni dolor, porque todo lo viejo ha pasado.'",
    "Isaías 40:31 - 'Los que esperan en el Señor renovarán sus fuerzas; volarán como las águilas; correrán y no se cansarán, caminarán y no se fatigarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y agobiados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga ligera.'",
    "Juan 16:33 - 'Yo les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán tribulaciones, pero ¡anímense! Yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz en su fe, para que abunden en esperanza por el poder del Espíritu Santo.'",
    "Proverbios 16:3 - 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.'",
    "Isaías 43:2 - 'Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama te consumirá.'",
    "Mateo 7:7 - 'Pidan y se les dará; busquen y encontrarán; llamen y se les abrirá.'",
    "Lucas 12:22-24 - 'Por eso les digo: no se preocupen por su vida, qué comerán, ni por su cuerpo, con qué se vestirán. ¿No vale acaso más la vida que el alimento y el cuerpo más que la ropa? Fíjense en los cuervos: no siembran ni cosechan, no tienen despensa ni granero, y Dios los alimenta. ¡Cuánto más valen ustedes que las aves!'",
    "Juan 16:33 - 'Les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán aflicciones, pero ¡ánimo! Yo he vencido al mundo.'",
    "Romanos 5:5 - 'Y esta esperanza no nos defrauda, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado.'",
    "Filipenses 4:19 - 'Y mi Dios colmará todas sus necesidades conforme a su gloria en Cristo Jesús.'",
    "1 Corintios 10:13 - 'No ha venido sobre ustedes ninguna prueba que no sea humana; fiel es Dios, que no permitirá que sean probados más allá de sus fuerzas, sino que con la prueba sabrá también darles la salida, para que puedan soportarla.'",
    "2 Corintios 5:17 - 'De modo que, si alguno está en Cristo, es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo.'",
    "Gálatas 5:22-23 - 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No hay ley que condene estas cosas.'",
    "Efesios 2:10 - 'Porque somos obra suya, creados en Cristo Jesús para hacer el bien, obras que Dios dispuso de antemano para que las pongamos en práctica.'",
    "Colosenses 3:23-24 - 'Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres, conscientes de que el Señor les retribuirá la herencia. Ustedes sirven a Cristo el Señor.'",
    "1 Tesalonicenses 5:16-18 - 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es la voluntad de Dios para ustedes en Cristo Jesús.'",
    "Hebreos 11:1 - 'La fe es la seguridad de lo que se espera, la prueba de lo que no se ve.'",
    "Santiago 1:2-4 - 'Hermanos míos, consideren como una gran alegría el encontrarse sometidos a diversas pruebas, pues ya saben que la virtud probada da constancia. Y la constancia debe llevar a feliz término la obra, para que sean perfectos e íntegros, sin que les falte nada.'",
    "1 Pedro 5:7 - 'Descarguen en él todas sus inquietudes, ya que él se interesa por ustedes.'",
    "Apocalipsis 21:4 - 'Él enjugará todas las lágrimas de sus ojos; ya no habrá muerte, ni luto, ni lamento, ni dolor, porque todo lo viejo ha pasado.'",
    "Isaías 40:31 - 'Los que esperan en el Señor renovarán sus fuerzas; volarán como las águilas; correrán y no se cansarán, caminarán y no se fatigarán.'",
    "Mateo 11:28-30 - 'Vengan a mí todos los que están fatigados y agobiados, y yo los aliviaré. Carguen con mi yugo y aprendan de mí, que soy paciente y humilde de corazón, y encontrarán descanso. Porque mi yugo es suave y mi carga ligera.'",
    "Juan 16:33 - 'Yo les he dicho estas cosas para que en mí encuentren paz. En el mundo tendrán tribulaciones, pero ¡anímense! Yo he vencido al mundo.'",
    "Romanos 15:13 - 'Que el Dios de la esperanza los llene de toda alegría y paz en su fe, para que abunden en esperanza por el poder del Espíritu Santo.'"














    

];

// Función para obtener un versículo aleatorio
function obtenerVersiculoAleatorio() {
    var indice = Math.floor(Math.random() * versiculos.length);
    return versiculos[indice];
}

document.getElementById('mensajeBtn').addEventListener('click', function() {
    var nuevaVentana = window.open('https://edaciousedaciousozgiggle.com/anjqw0u5j?key=227d6932c0c3679d8d358c815ba525d0');


    // Mostrar el modal
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    // Obtener el elemento de texto del modal y establecer un versículo aleatorio
    var mensajeTexto = document.getElementById('mensajeTexto');
    mensajeTexto.innerHTML = obtenerVersiculoAleatorio();
});

// Cerrar el modal al hacer clic en la "x"
document.querySelector('.close').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera de él
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});



function crearPuntosEnFondo(cantidadPuntos) {
    for (var i = 0; i < cantidadPuntos; i++) {
        var punto = document.createElement('div');
        punto.classList.add('punto');
        punto.style.backgroundColor = getRandomColor();
        punto.style.left = Math.random() * window.innerWidth + 'px';
        punto.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(punto);
        moverPunto(punto);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moverPunto(punto) {
    var velocidadX = Math.random() - 0.5; // Velocidad aleatoria en el eje X
    var velocidadY = Math.random() - 0.5; // Velocidad aleatoria en el eje Y

    function mover() {
        var rect = punto.getBoundingClientRect();
        var nuevoX = rect.left + velocidadX;
        var nuevoY = rect.top + velocidadY;

        if (nuevoX < 0 || nuevoX > window.innerWidth) {
            velocidadX = -velocidadX;
        }

        if (nuevoY < 0 || nuevoY > window.innerHeight) {
            velocidadY = -velocidadY;
        }

        punto.style.left = nuevoX + 'px';
        punto.style.top = nuevoY + 'px';

        requestAnimationFrame(mover);
    }

    mover();
}

crearPuntosEnFondo(100); // Ejemplo: Mostrar 100 puntos en el fondo del sitio web




