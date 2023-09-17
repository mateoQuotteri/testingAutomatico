const {Builder , Capabilities, By} = require("selenium-webdriver");

const chromeCapaBilities = Capabilities.chrome();

const assert = require("assert");


async function TC_001() {
    chromeCapaBilities.set("chromeOptions" , {args : ["--headles"]});
    //Defino un driver que me permitira operar sobre chrome
    let driver = await new Builder().forBrowser("chrome").withCapabilities(chromeCapaBilities).build();

    //Le doy la URL 
    await driver.get("https://www.facebook.com/?locale=es_LA");
    //Cuando esto se ejecute maximizame la ventana del browser
    await driver.manage().window().maximize()

    //Hago que se relentice el proceso 10 seg para poder ver el paso a paso bien
    await driver.sleep(10000)


    //Comienzo a interactuar con los elementos de mi UI:

    //Busco elemento cuyo id es email y una vez encontrado lo completo con ese email
    await driver.findElement(By.id("email")).sendKeys("mateocdaive.com.ar");

    //Busco elemento cuyo id es pass y una vez encontrado lo completo con esa pass
    await driver.findElement(By.id("pass")).sendKeys("COLOCAR CONTRASEÑA ");

    //simulo darle click al boton de sumbit buscandolo por su tipo (sumbit)
    //y le doy click
    await driver.findElement(By.xpath("//button[@type={'submit']")).click();

  //Hago que se relentice el proceso 5 seg para poder ver el paso a paso bien
  await driver.sleep(5000)


  //Validemos si el login fallo o no:

  //Si me logueo en facebook y hago todo correctamente, me lleva a una interfaz en donde hay un boton de continuar
  //Por ende chequiemos si es eboton esta en la intefaz con la que este programa se encuentra al intentar iniciar sesion con los datos que le pase


  //Obtengo la palabra que dice en dicho boton
  let textoDelBotonAComparar = await driver.findElement(By.id("checkpoitnSubmitButton")).getAttribute("value")

  //Valido si esa palabra es la que yo pensaba que me iba a encontrar

  assert.strictEqual(textoDelBotonAComparar , "Continuar")
  console.log("Test ok");
   //Hago que se relentice el proceso 10 seg para poder ver el paso a paso bien
   await driver.sleep(5000)


   //cierro todo lo realizado

   await driver.quit()
}


//Llamo a mi metodo
TC_001();