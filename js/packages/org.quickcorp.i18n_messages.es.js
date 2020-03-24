'use strict';
Package('org.quickcorp.i18n_messages.es', [
  Class('i18n_messages_es', i18n_messages, {
    messages: [{
      "en": "TO CODE FANCY, CLEAN AND QUICK",
      "es": "CODIGO ELEGANTE, LIMPIO Y RAPIDO"
    }, {
      "en": "Here is the reference documentation of QCObjects",
      "es": "Esta es la documentación de referencia de QCObjects"
    }, {
      "en": "An open source technology based in JavaScript designed to allow web developers to code targeting desktop and mobile devices into a runtime components and objects scope.",
      "es": "Una tecnología open source basada en JavaScript diseñada para permitir a los desarrolladores web programar apuntando a dispositivos mobile y desktop dentro de un entorno de componentes y objetos cargados en tiempo de ejecución"
    }, {
      "en": "QCObjects is being featured by British Herald as today, the most advanced framework for modern software development.",
      "es": "QCObjects es destacado por British Herald como hoy, el framework más avanzado para desarrollo de software moderno"
    }, {
      "en": "This document is the Main Reference Documentation!",
      "es": "Este documento es la principal Referencia de la documentación"
    }, {
      "en": "Check out the official page of QCObjects at",
      "es": "Visita la página oficial de QCObjects en"
    }, {
      "en": "This project adheres to the Contributor Covenant",
      "es": "Este proyecto se adhiere al Convenio de Contribuyente"
    }, {
      "en": "By participating, you are expected to uphold this code. Please report unacceptable behavior to",
      "es": "Al participar, se espera que respetes este código. Por favor reporta comportamientos inaceptables a"
    }, {
      "en": "Contributors are welcome!",
      "es": "¡Contribuidores son bienvenidos!"
    }, {
      "en": "You can contribute to QCObjects following the set of guidelines expressed in the file CONTRIBUTING.md",
      "es": "Puedes contribuir a QCObjects siguiendo el set de guía expresado en el archivo CONTRIBUTING.md"
    }, {
      "en": "Here are the principals with QCObjects was made with:",
      "es": "Estos son los principios con los cuales QCObjects fue hecho:"
    }, {
      "en": "To prevent Render-blocking resources, QCObjects has implemented the Package factory function.",
      "es": "Para prevenir recursos Render-blocking, QCObjects ha implementado una función Package factory."
    }, {
      "en": "With a dynamic components driven architecture, QCObjects is rendering every visual resource that is inside of a component only when the component is building itself, and every component is connected to a tree called global.componentsStack that is actually pointing to every component instance and its subcomponents. Every time a component is rebuilt, visual resources are dynamically reloaded on-demand in the most efficient way, so you can forget all the nasty code that you were needing to controll the resource loading process with other frameworks.",
      "es": "Con una arquitectura de componentes dinámicos, QCObjects dibuja cada recurso visual que está dentro de un componente solamente cuando el componente está construyéndose, y cada componente está conectado a un árbol llamado global.componentsStack que actualmente apunta a cada instancia de componente y sus componentes anidados. Cada vez que un componente es reconstruido, los recursos visuales son dinámicamente recargados on-demand de la manera más eficiente, así que puedes olvidarte de todo el código sucio que necesitabas para controlar la carga de procesos con otros frameworks."
    }, {
      "en": "Since the version 2.1.251, QCObjects provide an easy way to lazy load the images, using the latest standard for browsers.",
      "es": "Desde la versión 2.1.251, QCObjects provee una manera fácil para cargar las imágenes en modo lazy, usando los últimos estándares para los navegadores."
    }, {
      "en": "In the above code, a preloader (light-weight) image is used to be loaded in the first instance, and a lazy-src attribute is used to set the real image to show after lazy loading process. QCObjects will load all the  declared tags inside a component in lazy mode if they have a lazy-src attribute, after the component is rebuilt or loaded. Also, QCObjects will use the Intersection Observer API (when available) to determine whether the lazy-src or src image is visually useful to be showed.",
      "es": "En el código anterior, un preloader (liviano) es usado para cargar por primera instancia, y un atributo lazy-src es usado para configurar la imagen real a mostrar después del proceso de carga. QCObjects cargará todos los tags declarados dentro de un componente en modo lazy si tienen presente un atributo lazy-src, luego de que el componente es reconstruido o cargado. Además, QCObjects usará la API de Intersection Observer (cuando esté disponible) para determinar cuando usar lazy-src o src. "
    }, {
      "en": "The effect of lazy loading is only high visible on the first time the PWA is loaded. The next time, the speed of loading will be significantly increased making more difficult to the human eye to see the result. However this feature makes a lot of difference in terms of user experience when the internet connection has low speed issues or the images are extremely large. This feature is a part of the recommended features for PWAs writen by Mozzila Developers Network in an article about Progressive loading. You can read that article here",
      "es": "El efecto de carga lazy solamente es visible la primera vez que la PWA se carga. La próxima vez, la velocidad de carga será aumentada significativamente haciendo más dificil al ojo humano ver el resultado. Sin embargo, esta funcionalidad hace mucha diferencia en términos de experiencia de usuario cuando la conexión a internet es lenta o las imágenes son grandes. Esta característica es parte de las funcionalidades recomendadas para PWAs escritas por Mozzila Developers Network en un artículo acerca de carga progresiva. Puedes leer este artículo aquí"
    }, {
      "en": "If you don't want to use lazy loading for images, you can always keep the normal way of loading by not adding the lazy-src attribute to the  tag and using the traditional src.",
      "es": "Si no quieres la carga lazy para imágenes, siempre puedes mantener la manera usual de carga al no añadir el atributo lazy-src al tag y usar el atributo tradicional src."
    }, {
      "en": "QCObjects is a javascript framework designed to make easier everything about the MVC patterns implementation into the pure javascript scope. You don't need to use typescript nor any transpiler to run QCObjects. It runs directly on the browser and it uses pure javascript with no extra dependencies of code. You can make your own components expressed in real native javascript objects or extend a native DOM object to use in your own way. You can also use QCObjects in conjunction with CSS3 frameworks like Foundation, Bootstrap and mobile javascript frameworks like PhoneGap and OnsenUI",
      "es": "QCObjects es un framework javascript diseñado para hacer todo más fácil en cuando a implementación de patrones MVC en un ambiente puro. No necesitas usar typescript o ningún otro transpilador para correr QCObjects. Funciona directo en el navegador y usa javascript puro sin otras dependencias extra de código. Puedes hacer tus propios componentes expresados en objectos JavaScript realmente nativos o extener el DOM nativo a tu manera. Puedes usar también QCObjects en conjunto con frameworks CSS3 como Foundation, Bootstrap y frameworks mobile javascript como PhoneGap y OnsenUI"
    }, {
      "en": "See\nECMAScriptÂ® 2020 Language Specification for reference",
      "es": "Ver Especificación de Lenguaje ECMAScript 2020 para referencia"
    }, {
      "en": "Copyright (c) Jean Machuca and QuickCorp",
      "es": "Copyright (c) Jean Machuca y QuickCorp"
    }, {
      "en": "Check out a live demo of pure QCObjects based frontend Progressive Web App here",
      "es": "Revisa la demo en vivo de una App Web Progresiva basada en QCObjects aquí"
    }, {
      "en": "Check out a demo using Foundation components here",
      "es": "Revisa la demo usando componentes de Foundation aquí"
    }, {
      "en": "Check out a demo using MaterializeCSS here",
      "es": "Revisa la demo usando MaterializeCSS aquí"
    }, {
      "en": "Check out a demo using raw CSS",
      "es": "Revisa la demo usando raw CSS"
    }, {
      "en": "The following code shows how QCObjects can manipulate canvas objects directly and inside components",
      "es": "El siguiente código muestra como QCObjects puede manipular objetos canvas directamente y dentro de componentes"
    }, {
      "en": "Please fork this project or make a link to this project into your README.md file. Read the LICENSE.txt file before you use this code.",
      "es": "Por favor haz fork a este proyecto y haz un link para este proyecto en tu archivo README.md. Leer el archivo LICENSE.txt antes de usar este código."
    }, {
      "en": "If you want to become a sponsor for this wonderful project you can do it",
      "es": "Si te quieres convertir en sponsor de este maravilloso proyecto puedes hacerlo"
    }, {
      "en": "You can check out the QCObjects SDK and follow the examples to make your own featured components",
      "es": "Puedes revisar QCObjects SDK y seguir los ejemplos para hacer tus propios componentes"
    }, {
      "en": "If you like this code please",
      "es": "Si te gusta este código por favor"
    }, {
      "en": "Tested on macOS Catalina 10.15.3",
      "es": "Probado en macOS Catalina 10.15.3"
    }, {
      "en": "1.- Install the latest version of NodeJS for Windows from here\n2.- From cmd install qcobjects-cli using npm",
      "es": "1.- Install the latest version of NodeJS for Windows from here\n2.- From cmd install qcobjects-cli using npm"
    }, {
      "en": "3.- Create a directory for your project",
      "es": "3.- Crear un directorio para tu proyecto"
    }, {
      "en": "4.- Create a new QCObjects Progressive Web Application",
      "es": "4.- Crear una nueva App Progresiva QCObjects"
    }, {
      "en": "QCObjects is natively supported by the most famous cloud providers. In most of them, you can install it and set everything up and running in just one step.",
      "es": "QCObjects es soportado de forma nativa por los proveedores cloud más famosos. En la mayoría, puedes instalar y configurar todo en un solo paso."
    }, {
      "en": "If you want to forget apt-get and the config guide. Go straight to deploying your project using a preconfigured 1-Click App including QCObjects CLI, QCObjects-SDK and QCObjects HTTP2 Built-In Server, then spin it up on a Droplet VM or a Kubernetes cluster in 60 seconds or less.",
      "es": "If you want to forget apt-get and the config guide. Go straight to deploying your project using a preconfigured 1-Click App including QCObjects CLI, QCObjects-SDK and QCObjects HTTP2 Built-In Server, then spin it up on a Droplet VM or a Kubernetes cluster in 60 seconds or less."
    }, {
      "en": "Create Your Own",
      "es": "Crea tu propio"
    }, {
      "en": "An Amazon Machine Image (AMI) provides the information required to launch an instance. You must specify an AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations.",
      "es": "An Amazon Machine Image (AMI) provides the information required to launch an instance. You must specify an AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations."
    }, {
      "en": "An AMI includes the following:",
      "es": "An AMI includes the following:"
    }, {
      "en": "Start building your QCObjects AMI here",
      "es": "Start building your QCObjects AMI here"
    }, {
      "en": "A Private Image lets you build a new AMI by installing AWS Marketplace software on an image you choose from the AMIs available to your AWS account, this allows you to better meet internal specifications for security, management and compliance. As with standard AWS Marketplace AMIs, each Private Image will comprise a subscription for the installed product and have software usage billed via AWS Marketplace.",
      "es": "A Private Image lets you build a new AMI by installing AWS Marketplace software on an image you choose from the AMIs available to your AWS account, this allows you to better meet internal specifications for security, management and compliance. As with standard AWS Marketplace AMIs, each Private Image will comprise a subscription for the installed product and have software usage billed via AWS Marketplace."
    }, {
      "en": "Start building your QCObjects Amazon Private Image here",
      "es": "Start building your QCObjects Amazon Private Image here"
    }, {
      "en": "Here are the essentials symbols and concepts of QCObjects Reference",
      "es": "Here are the essentials symbols and concepts of QCObjects Reference"
    }, {
      "en": "Basic Type of all elements",
      "es": "Basic Type of all elements"
    }, {
      "en": "With ComplexStorageCache you can handle a cache for any object and save it in the local storage.",
      "es": "With ComplexStorageCache you can handle a cache for any object and save it in the local storage."
    }, {
      "en": "The asyncLoad function loads a code once in async mode. This is useful to asure some initial process don't replicate its execution and aren't loaded after sensitive code.",
      "es": "The asyncLoad function loads a code once in async mode. This is useful to asure some initial process don't replicate its execution and aren't loaded after sensitive code."
    }, {
      "en": "This is NOT the class definition of ECMAScript 2015 (see class ECMAScript 2015 for reference).",
      "es": "This is NOT the class definition of ECMAScript 2015 (see class ECMAScript 2015 for reference)."
    }, {
      "en": "Class is a special function to help you to declare a class in an easier and compatible way. It works cross-browser, and I hope ECMA could adopt something like that in the future. To let javascript not to be confuse about this, QCObjects uses \"Class\" not \"class\" (note the Camel Case).",
      "es": "Class is a special function to help you to declare a class in an easier and compatible way. It works cross-browser, and I hope ECMA could adopt something like that in the future. To let javascript not to be confuse about this, QCObjects uses \"Class\" not \"class\" (note the Camel Case)."
    }, {
      "en": "Where MyClassDefinition is an object with a QCObjects prototype",
      "es": "Where MyClassDefinition is an object with a QCObjects prototype"
    }, {
      "en": "This is a special method inserted to make your life easier when you want to dynamically manipulate the DOM. You can insert even a Component, a QCObjects Object or a DOM Element inside another HTMLElement.",
      "es": "This is a special method inserted to make your life easier when you want to dynamically manipulate the DOM. You can insert even a Component, a QCObjects Object or a DOM Element inside another HTMLElement."
    }, {
      "en": "When you extend a QCObjects class from another one, you can use _super_ method to get an instance from the main class definition.",
      "es": "When you extend a QCObjects class from another one, you can use _super_ method to get an instance from the main class definition."
    }, {
      "en": "Creates an object instance of a QCObjects class definition.",
      "es": "Creates an object instance of a QCObjects class definition."
    }, {
      "en": "NOTE: In the properties object you can use single values or getter as well but they will be executed once.",
      "es": "NOTE: In the properties object you can use single values or getter as well but they will be executed once."
    }, {
      "en": "A single common used QCObjects class definition.",
      "es": "A single common used QCObjects class definition."
    }, {
      "en": "Use ClassFactory to get the Class declaration factory instance of a QCObjects Class\nYou can get either a Class factory from a Package or from the Class queue stack",
      "es": "Use ClassFactory to get the Class declaration factory instance of a QCObjects Class\nYou can get either a Class factory from a Package or from the Class queue stack"
    }, {
      "en": "To retreive the ClassFactory from the Class queue stack you can simply use the name of a Class as calling directly in the code.",
      "es": "To retreive the ClassFactory from the Class queue stack you can simply use the name of a Class as calling directly in the code."
    }, {
      "en": "The above examples are intentionally done to explain and show how the scope of the Class definitions in QCObjects is protected and handled and it is reflected in the use of ClassFactory.",
      "es": "The above examples are intentionally done to explain and show how the scope of the Class definitions in QCObjects is protected and handled and it is reflected in the use of ClassFactory."
    }, {
      "en": "So you are gonna want to use ClassFactory when you need complete control over the scope when extending Classes",
      "es": "So you are gonna want to use ClassFactory when you need complete control over the scope when extending Classes"
    }, {
      "en": "Example",
      "es": "Example"
    }, {
      "en": "With _Crypt you can encode serializable objects by a passphrase",
      "es": "With _Crypt you can encode serializable objects by a passphrase"
    }, {
      "en": "###Example (2):",
      "es": "###Example (2):"
    }, {
      "en": "GLOBAL is a special QCObjects class to reach the global scope. It has a set and a get method to help you to manage the internal GLOBAL properties.",
      "es": "GLOBAL is a special QCObjects class to reach the global scope. It has a set and a get method to help you to manage the internal GLOBAL properties."
    }, {
      "en": "CONFIG is a smart class that manages the global settings of your application. You can get the properties either from a config.json or from the memory previously saved by a set() call.",
      "es": "CONFIG is a smart class that manages the global settings of your application. You can get the properties either from a config.json or from the memory previously saved by a set() call."
    }, {
      "en": "1.- In your initial code set the CONFIG initial values:",
      "es": "1.- In your initial code set the CONFIG initial values:"
    }, {
      "en": "2.- Then you can access it from anywhere in your code by using the get method:",
      "es": "2.- Then you can access it from anywhere in your code by using the get method:"
    }, {
      "en": "1.- You need to indicate first that you are using a config.json file by setting the \"useConfigService\" value to true",
      "es": "1.- You need to indicate first that you are using a config.json file by setting the \"useConfigService\" value to true"
    }, {
      "en": "2.- Once you have set the value above QCObjects will know and look to the next CONFIG settings into the file config.json in the basePath folder of your application.",
      "es": "2.- Once you have set the value above QCObjects will know and look to the next CONFIG settings into the file config.json in the basePath folder of your application."
    }, {
      "en": "There is also a way to use an encrypted config.json file in order to protect your settings robots that can steal unprotected data from your web application (like API keys web crawlers).",
      "es": "There is also a way to use an encrypted config.json file in order to protect your settings robots that can steal unprotected data from your web application (like API keys web crawlers)."
    }, {
      "en": "To encrypt your json file go to https://config.qcobjects.dev, put your domain and the config.json content. The tool will encrypt your json and you can copy the encrypted content to insert it in your config.json file. QCObjects will know the data is encrypted and the process to decode the data will be transparent for you.",
      "es": "To encrypt your json file go to https://config.qcobjects.dev, put your domain and the config.json content. The tool will encrypt your json and you can copy the encrypted content to insert it in your config.json file. QCObjects will know the data is encrypted and the process to decode the data will be transparent for you."
    }, {
      "en": "waitUntil is a helper just in case you are in trouble trying to run a code before a condition is true. The code inside waitUntil will be executed once.",
      "es": "waitUntil is a helper just in case you are in trouble trying to run a code before a condition is true. The code inside waitUntil will be executed once."
    }, {
      "en": "NOTE: This is useful in some cases but an excessive use is not recommended.",
      "es": "NOTE: This is useful in some cases but an excessive use is not recommended."
    }, {
      "en": "Defines a QCObjects package and returns it.",
      "es": "Defines a QCObjects package and returns it."
    }, {
      "en": "Where packageContent is an array of QCObjects Classes. If you only pass the packageName param you will get the previously declared package content.",
      "es": "Where packageContent is an array of QCObjects Classes. If you only pass the packageName param you will get the previously declared package content."
    }, {
      "en": "The packages loading technique present in QCObjects is promise based and also scope oriented. You can ask if a package is loaded simply calling the Package() function passing a package name as an argument.",
      "es": "The packages loading technique present in QCObjects is promise based and also scope oriented. You can ask if a package is loaded simply calling the Package() function passing a package name as an argument."
    }, {
      "en": "Imports a package from another JS file",
      "es": "Imports a package from another JS file"
    }, {
      "en": "Where packagename is the name of the package, ready is a function that will be executed after the package is loaded, and external is a boolean value that indicates if the JS file is in the same origin or it is from another external resource.",
      "es": "Where packagename is the name of the package, ready is a function that will be executed after the package is loaded, and external is a boolean value that indicates if the JS file is in the same origin or it is from another external resource."
    }, {
      "en": "The above code will try to import a JS fila named 'org.quickcorp.main.js' from the path specified in the relativeImportPath settings value present in your CONFIG. Inside the JS file you have to define a package by using Package('org.quickcorp.main',[Class1, Class2…])",
      "es": "The above code will try to import a JS fila named 'org.quickcorp.main.js' from the path specified in the relativeImportPath settings value present in your CONFIG. Inside the JS file you have to define a package by using Package('org.quickcorp.main',[Class1, Class2…])"
    }, {
      "en": "The above code this time is trying to load the same package but using an external path defined by the remoteImportsPath setting present in your CONFIG",
      "es": "The above code this time is trying to load the same package but using an external path defined by the remoteImportsPath setting present in your CONFIG"
    }, {
      "en": "NOTE: In both examples above you have not use or specify the \".js\" extension. This it's used by default and can't be changed by security reasons.",
      "es": "NOTE: In both examples above you have not use or specify the \".js\" extension. This it's used by default and can't be changed by security reasons."
    }, {
      "en": "Put a symbol (var or function) in the global scope.",
      "es": "Put a symbol (var or function) in the global scope."
    }, {
      "en": "Use the Cast method of any DOM element to get the properties of another type of object. This is useful to transform an object type to another giving more flexibility in your code.",
      "es": "Use the Cast method of any DOM element to get the properties of another type of object. This is useful to transform an object type to another giving more flexibility in your code."
    }, {
      "en": "Where objectToCastFrom is an object to get the properties from and put it into the result object returned by Cast.",
      "es": "Where objectToCastFrom is an object to get the properties from and put it into the result object returned by Cast."
    }, {
      "en": "The above code will create a DOM object and Cast it to MyOwnClass. Because of MyOwnClass is a QCObjects type class, obj will now have a prop1 and prop2 properties, and will now be a QCObjects object instance with a body property that is a div element.",
      "es": "The above code will create a DOM object and Cast it to MyOwnClass. Because of MyOwnClass is a QCObjects type class, obj will now have a prop1 and prop2 properties, and will now be a QCObjects object instance with a body property that is a div element."
    }, {
      "en": "Tag is a useful function to select any DOM element using selectors. Tag will always return a list of elements, that you can map, sort, and filter as any other list.",
      "es": "Tag is a useful function to select any DOM element using selectors. Tag will always return a list of elements, that you can map, sort, and filter as any other list."
    }, {
      "en": "Where selector is a DOM query selector.",
      "es": "Where selector is a DOM query selector."
    }, {
      "en": "In the above code, a paragraph element was created inside a div with a css class named myselector by html, and then is modified dynamically using the QCObjects Tag function. If you are familiar with query selector frameworks like JQuery, you will love this one.",
      "es": "In the above code, a paragraph element was created inside a div with a css class named myselector by html, and then is modified dynamically using the QCObjects Tag function. If you are familiar with query selector frameworks like JQuery, you will love this one."
    }, {
      "en": "Assign a function to run after everything is done by QCObjects and after the window.onload event. Use it to prevent 'undefined' DOM objects error.",
      "es": "Assign a function to run after everything is done by QCObjects and after the window.onload event. Use it to prevent 'undefined' DOM objects error."
    }, {
      "en": "Note that if you define dynamic components by using a HTML \"component\" tag, the dynamic content load will not trigger Ready events. To catch code everytime a dynamic component is loaded, use a Controller done method instead.",
      "es": "Note that if you define dynamic components by using a HTML \"component\" tag, the dynamic content load will not trigger Ready events. To catch code everytime a dynamic component is loaded, use a Controller done method instead."
    }, {
      "en": "You will use Ready implementation mostly when you want to implement QCObjects in conjunction with another framework that needs it.",
      "es": "You will use Ready implementation mostly when you want to implement QCObjects in conjunction with another framework that needs it."
    }, {
      "en": "A QCObjects class type for components.",
      "es": "A QCObjects class type for components."
    }, {
      "en": "[Component].domain\nReturns a string with the domain of your application. It is automatically set by QCObjects at the load time.",
      "es": "[Component].domain\nReturns a string with the domain of your application. It is automatically set by QCObjects at the load time."
    }, {
      "en": "[Component].basePath\nReturns a string with the base path url of your application. It is automatically set by QCObjects at the load time.",
      "es": "[Component].basePath\nReturns a string with the base path url of your application. It is automatically set by QCObjects at the load time."
    }, {
      "en": "NOTE: If you want to change the components base path, you have to use CONFIG.set('componentsBasePath','new path relative to the domain') in your init code.",
      "es": "NOTE: If you want to change the components base path, you have to use CONFIG.set('componentsBasePath','new path relative to the domain') in your init code."
    }, {
      "en": "[Component].templateURI\nIs a string representing the component template URI relative to the domain. When is set, the component will load a template and append the inner content into the body childs as a part of the DOM. To set this property, it is recommended to use the ComponentURI helper function.",
      "es": "[Component].templateURI\nIs a string representing the component template URI relative to the domain. When is set, the component will load a template and append the inner content into the body childs as a part of the DOM. To set this property, it is recommended to use the ComponentURI helper function."
    }, {
      "en": "[Component].tplsource\nIs a string representing the source where the template will be loaded. It can be \"default\" or \"none\". A value of \"default\" will tell QCObjects to load the template from the templateURI content. A value of \"none\" will tell QCObjects not to load a template from anywhere.",
      "es": "[Component].tplsource\nIs a string representing the source where the template will be loaded. It can be \"default\" or \"none\". A value of \"default\" will tell QCObjects to load the template from the templateURI content. A value of \"none\" will tell QCObjects not to load a template from anywhere."
    }, {
      "en": "[Component].url\nIs a string representing the entire url of the component. It is automatically set by QCObjects when the component is instantiated.",
      "es": "[Component].url\nIs a string representing the entire url of the component. It is automatically set by QCObjects when the component is instantiated."
    }, {
      "en": "[Component].name\nIs a string representing the name of a component. The name of a component can be any alphanumeric value that identifies the component type. It will be internally used by ComponentURI to build a normalised component template URI.",
      "es": "[Component].name\nIs a string representing the name of a component. The name of a component can be any alphanumeric value that identifies the component type. It will be internally used by ComponentURI to build a normalised component template URI."
    }, {
      "en": "[Component].method\nIs a string representing a HTTP or HTTPS method. By default, every component is set to use the \"GET\" method. In the most of cases, you don't need to change this property.",
      "es": "[Component].method\nIs a string representing a HTTP or HTTPS method. By default, every component is set to use the \"GET\" method. In the most of cases, you don't need to change this property."
    }, {
      "en": "[Component].data\nIs an object representing the data of the component. When QCObjects loads a template, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the component instance).\nNOTE: To refresh the data bindings it is needed to rebuild the component (see the use of [Component].rebuild() method for more details ).",
      "es": "[Component].data\nIs an object representing the data of the component. When QCObjects loads a template, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the component instance).\nNOTE: To refresh the data bindings it is needed to rebuild the component (see the use of [Component].rebuild() method for more details )."
    }, {
      "en": "[Component].reload\nIs a boolean value that tells QCObjects when to force reload the content of a component from the template or not. If its value is true, the template content will be replacing the current DOM childs of the component body element. If its value is false, the template content will be added after the las component body child.",
      "es": "[Component].reload\nIs a boolean value that tells QCObjects when to force reload the content of a component from the template or not. If its value is true, the template content will be replacing the current DOM childs of the component body element. If its value is false, the template content will be added after the las component body child."
    }, {
      "en": "[Component].cached\nIs a boolean value that tells QCObjects if the component needs to be cached or not. When a component is cached, the template content loaded from templateURI will be loaded once. You can set this property either as a static property of the Component Class to set the default value for every next component object instance, or setting the individual value of the property in every component definition. In a world where the performance matters, to give more flexibility to the cache behaviour is needed more than ever.",
      "es": "[Component].cached\nIs a boolean value that tells QCObjects if the component needs to be cached or not. When a component is cached, the template content loaded from templateURI will be loaded once. You can set this property either as a static property of the Component Class to set the default value for every next component object instance, or setting the individual value of the property in every component definition. In a world where the performance matters, to give more flexibility to the cache behaviour is needed more than ever."
    }, {
      "en": "[Component].routingWay\nReturns a string representing the routing way. Its value can be \"hash\", \"pathname\" or \"search\".\nNOTE: To change the routingWay of every component it is recommended to use CONFIG.set('routingWay','value of a valid routing way') in your init code.",
      "es": "[Component].routingWay\nReturns a string representing the routing way. Its value can be \"hash\", \"pathname\" or \"search\".\nNOTE: To change the routingWay of every component it is recommended to use CONFIG.set('routingWay','value of a valid routing way') in your init code."
    }, {
      "en": "[Component].validRoutingWays\nReturns a list representing the valid routing ways. QCObjects uses this to internally validate the routingWay which was used to build the component routings.",
      "es": "[Component].validRoutingWays\nReturns a list representing the valid routing ways. QCObjects uses this to internally validate the routingWay which was used to build the component routings."
    }, {
      "en": "[Component].routingNodes\nReturns a NodeList object representing the list of nodes that were loaded by the component routing builder.",
      "es": "[Component].routingNodes\nReturns a NodeList object representing the list of nodes that were loaded by the component routing builder."
    }, {
      "en": "[Component].routings\nReturns a list with the component routings built when the component was instantiated.",
      "es": "[Component].routings\nReturns a list with the component routings built when the component was instantiated."
    }, {
      "en": "[Component].routingPath\nReturns a string representing the current routing path",
      "es": "[Component].routingPath\nReturns a string representing the current routing path"
    }, {
      "en": "[Component].routingSelected\nReturns an object representing the current routing of the component",
      "es": "[Component].routingSelected\nReturns an object representing the current routing of the component"
    }, {
      "en": "[Component].subcomponents\nReturns a list of components that are childs of the component instance.",
      "es": "[Component].subcomponents\nReturns a list of components that are childs of the component instance."
    }, {
      "en": "[Component].body\nIs a DOM element representing the body of the component.\nNOTE: Every time a component body is set, it will trigger the routings builder for this component.",
      "es": "[Component].body\nIs a DOM element representing the body of the component.\nNOTE: Every time a component body is set, it will trigger the routings builder for this component."
    }, {
      "en": "[Component].set('prop',value)\nSets a value for a component property.",
      "es": "[Component].set('prop',value)\nSets a value for a component property."
    }, {
      "en": "[Component].get('prop')\nReturns the value of a component property",
      "es": "[Component].get('prop')\nReturns the value of a component property"
    }, {
      "en": "[Component].rebuild()\nRebuilds the component. It will force a call for the componentLoader with this component when it's needed.",
      "es": "[Component].rebuild()\nRebuilds the component. It will force a call for the componentLoader with this component when it's needed."
    }, {
      "en": "[Component].Cast(ClassName or ComponentClassName)\nReturns the cast of a component definition into another one. This is useful to dynamically merge components definitions.",
      "es": "[Component].Cast(ClassName or ComponentClassName)\nReturns the cast of a component definition into another one. This is useful to dynamically merge components definitions."
    }, {
      "en": "[Component].route()\nForces the component routings builder to reload the routings of the component. This will result in a rebuild call when it's needed.",
      "es": "[Component].route()\nForces the component routings builder to reload the routings of the component. This will result in a rebuild call when it's needed."
    }, {
      "en": "[Component].fullscreen()\nPuts the component in fullscreen mode.",
      "es": "[Component].fullscreen()\nPuts the component in fullscreen mode."
    }, {
      "en": "[Component].closefullscreen()\nCloses the fullscreen mode.",
      "es": "[Component].closefullscreen()\nCloses the fullscreen mode."
    }, {
      "en": "[Component].css(css object)\nSets the css properties for the component.",
      "es": "[Component].css(css object)\nSets the css properties for the component."
    }, {
      "en": "[Component].append(component or QCObjects object)\nAppends a component as a child of the current component body",
      "es": "[Component].append(component or QCObjects object)\nAppends a component as a child of the current component body"
    }, {
      "en": "[Component].attachIn(selector)\nAttaches a current component body to any element in the given selector.",
      "es": "[Component].attachIn(selector)\nAttaches a current component body to any element in the given selector."
    }, {
      "en": "Is a HTML tag representation of a component instance. Every declaration of a <component></component> tag will generate a related instance of a QCObjects component. While a component tag is not an instance itself, you can even define some instance properties by setting the related tag attribute when it is available.",
      "es": "Is a HTML tag representation of a component instance. Every declaration of a <component></component> tag will generate a related instance of a QCObjects component. While a component tag is not an instance itself, you can even define some instance properties by setting the related tag attribute when it is available."
    }, {
      "en": "Below is a list of the available attributes for a component tag",
      "es": "Below is a list of the available attributes for a component tag"
    }, {
      "en": "<component name>\nSets the name of the related component instance built by QCObjects.",
      "es": "<component name>\nSets the name of the related component instance built by QCObjects."
    }, {
      "en": "<component cached>\nSets the cached property if the related instance of a component.",
      "es": "<component cached>\nSets the cached property if the related instance of a component."
    }, {
      "en": "NOTE: Only a value of \"true\" can be set in order to tell QCObjects that the component template content has to be cached. Any other value will be interpreted as false.",
      "es": "NOTE: Only a value of \"true\" can be set in order to tell QCObjects that the component template content has to be cached. Any other value will be interpreted as false."
    }, {
      "en": "<component data-property1 data-property2 ...>\nSets a static value of a property for the data object in the component instance.",
      "es": "<component data-property1 data-property2 ...>\nSets a static value of a property for the data object in the component instance."
    }, {
      "en": "NOTE: Data property tag declaration was thought with the purpose to give some simple way to mocking a dynamic component with template assignments. Don't use it thinking it is a bidirectional way data binding. While you can get a bidirectional way behaviour accesing a data object from a component instance, it is not the same for the component tag. Data property declaration in component tags is only one way data binding because of components tree architecture.",
      "es": "NOTE: Data property tag declaration was thought with the purpose to give some simple way to mocking a dynamic component with template assignments. Don't use it thinking it is a bidirectional way data binding. While you can get a bidirectional way behaviour accesing a data object from a component instance, it is not the same for the component tag. Data property declaration in component tags is only one way data binding because of components tree architecture."
    }, {
      "en": "<component controllerClass>\nDefines a custom Controller Class for the component instance",
      "es": "<component controllerClass>\nDefines a custom Controller Class for the component instance"
    }, {
      "en": "<component viewClass>\nDefines a custom View Class for the component instance",
      "es": "<component viewClass>\nDefines a custom View Class for the component instance"
    }, {
      "en": "<component componentClass>\nDefines a custom Component Class for the component instance",
      "es": "<component componentClass>\nDefines a custom Component Class for the component instance"
    }, {
      "en": "<component effectClass>\nDefines a custom Effect Class for the component instance",
      "es": "<component effectClass>\nDefines a custom Effect Class for the component instance"
    }, {
      "en": "<component template-source>\nSets the tplsource property of the related instance of a component. Possible values are \"none\" or \"default\".",
      "es": "<component template-source>\nSets the tplsource property of the related instance of a component. Possible values are \"none\" or \"default\"."
    }, {
      "en": "<component tplextension>\nSets the tplextension property of the related instance of a component. Possible values are any file extension. Default value is \"html\"",
      "es": "<component tplextension>\nSets the tplextension property of the related instance of a component. Possible values are any file extension. Default value is \"html\""
    }, {
      "en": "Is a helper function to let you define the templateURI for a component in a normalised way.",
      "es": "Is a helper function to let you define the templateURI for a component in a normalised way."
    }, {
      "en": "Loads a component instance in a low level, and appends the component template content to the component body. In the most of cases you won't need to call componentLoader in order to load a component. This is automatically called by QCObjects when it's needed. componentLoader returns a promise that is resolved when the component load is done and rejected when the component load was failed.",
      "es": "Loads a component instance in a low level, and appends the component template content to the component body. In the most of cases you won't need to call componentLoader in order to load a component. This is automatically called by QCObjects when it's needed. componentLoader returns a promise that is resolved when the component load is done and rejected when the component load was failed."
    }, {
      "en": "Where componentInstance is a component instance created by New(ComponentDefinitionClass)",
      "es": "Where componentInstance is a component instance created by New(ComponentDefinitionClass)"
    }, {
      "en": "Rebuilds every component that is a child element of the DOM element who owns the method. In the most of cases, you won't need to call buildComponents in order to build or rebuild every component in the DOM. This is automatically called by QCObjects when it's needed.",
      "es": "Rebuilds every component that is a child element of the DOM element who owns the method. In the most of cases, you won't need to call buildComponents in order to build or rebuild every component in the DOM. This is automatically called by QCObjects when it's needed."
    }, {
      "en": "A built-in QCObjects Class to define a controller",
      "es": "A built-in QCObjects Class to define a controller"
    }, {
      "en": "A built-in QCObjects View to define a view",
      "es": "A built-in QCObjects View to define a view"
    }, {
      "en": "A built-in QCObjects Class to define a value object",
      "es": "A built-in QCObjects Class to define a value object"
    }, {
      "en": "A QCObjects class type for services.",
      "es": "A QCObjects class type for services."
    }, {
      "en": "[Service].domain\nReturns a string with the domain of your application. It is automatically set by QCObjects at the load time.",
      "es": "[Service].domain\nReturns a string with the domain of your application. It is automatically set by QCObjects at the load time."
    }, {
      "en": "[Service].basePath\nReturns a string with the base path url of your application. It is automatically set by QCObjects at the load time.",
      "es": "[Service].basePath\nReturns a string with the base path url of your application. It is automatically set by QCObjects at the load time."
    }, {
      "en": "[Service].url\nIs a string representing the entire url of the service. It can be absolute or relative to the basePath when it applies. It can be also an external url.",
      "es": "[Service].url\nIs a string representing the entire url of the service. It can be absolute or relative to the basePath when it applies. It can be also an external url."
    }, {
      "en": "NOTE: To load a service of an external resource you need to specify the external parameter to true using serviceLoader.",
      "es": "NOTE: To load a service of an external resource you need to specify the external parameter to true using serviceLoader."
    }, {
      "en": "[Service].name\nIs a string representing the name of a component. The name of a service can be any alphanumeric value that identifies the service instance. It isn't a unique ID but only a descriptive name.",
      "es": "[Service].name\nIs a string representing the name of a component. The name of a service can be any alphanumeric value that identifies the service instance. It isn't a unique ID but only a descriptive name."
    }, {
      "en": "[Service].method\nIs a string representing a HTTP or HTTPS method. Possible values are: \"GET\", \"POST\", \"PUT\", … any other that is accepted by REST services calls.",
      "es": "[Service].method\nIs a string representing a HTTP or HTTPS method. Possible values are: \"GET\", \"POST\", \"PUT\", … any other that is accepted by REST services calls."
    }, {
      "en": "[Service].data\nIs an object representing the data of the service. When QCObjects loads a service. It receives the response and interpretes it as a template. So once a service response is obtained, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the service instance).",
      "es": "[Service].data\nIs an object representing the data of the service. When QCObjects loads a service. It receives the response and interpretes it as a template. So once a service response is obtained, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the service instance)."
    }, {
      "en": "[Service].cached\nIs a boolean value that tells QCObjects if the service response needs to be cached or not. When a service is cached, the template content loaded from the service url will be loaded only once. You have to set this value to false for every Service instance you define in order to asure the service is loaded from the resource but not the storage cache.",
      "es": "[Service].cached\nIs a boolean value that tells QCObjects if the service response needs to be cached or not. When a service is cached, the template content loaded from the service url will be loaded only once. You have to set this value to false for every Service instance you define in order to asure the service is loaded from the resource but not the storage cache."
    }, {
      "en": "[Service].set('prop',value)\nSets a value for a service property.",
      "es": "[Service].set('prop',value)\nSets a value for a service property."
    }, {
      "en": "[Service].get('prop')\nReturns the value of a service property",
      "es": "[Service].get('prop')\nReturns the value of a service property"
    }, {
      "en": "Loads a service instance and returns a promise that is resolved when the service has a successful response load and is rejected when it fails loading the response.",
      "es": "Loads a service instance and returns a promise that is resolved when the service has a successful response load and is rejected when it fails loading the response."
    }, {
      "en": "Is a built-in definition for a JSON Service Class",
      "es": "Is a built-in definition for a JSON Service Class"
    }, {
      "en": "[JSONService].domain\nReturns a string with the domain of your application. It is automatically set by QCObjects at the load time.",
      "es": "[JSONService].domain\nReturns a string with the domain of your application. It is automatically set by QCObjects at the load time."
    }, {
      "en": "[JSONService].basePath\nReturns a string with the base path url of your application. It is automatically set by QCObjects at the load time.",
      "es": "[JSONService].basePath\nReturns a string with the base path url of your application. It is automatically set by QCObjects at the load time."
    }, {
      "en": "[JSONService].url\nIs a string representing the entire url of the service. It can be absolute or relative to the basePath when it applies. It can be also an external url.",
      "es": "[JSONService].url\nIs a string representing the entire url of the service. It can be absolute or relative to the basePath when it applies. It can be also an external url."
    }, {
      "en": "NOTE: To load a service of an external resource you need to specify the external parameter to true using serviceLoader.",
      "es": "NOTE: To load a service of an external resource you need to specify the external parameter to true using serviceLoader."
    }, {
      "en": "[JSONService].name\nIs a string representing the name of a component. The name of a service can be any alphanumeric value that identifies the service instance. It isn't a unique ID but only a descriptive name.",
      "es": "[JSONService].name\nIs a string representing the name of a component. The name of a service can be any alphanumeric value that identifies the service instance. It isn't a unique ID but only a descriptive name."
    }, {
      "en": "[JSONService].method\nIs a string representing a HTTP or HTTPS method. Possible values are: \"GET\", \"POST\", \"PUT\", … any other that is accepted by REST services calls.",
      "es": "[JSONService].method\nIs a string representing a HTTP or HTTPS method. Possible values are: \"GET\", \"POST\", \"PUT\", … any other that is accepted by REST services calls."
    }, {
      "en": "[JSONService].data\nIs an object representing the data of the service. When QCObjects loads a service. It receives the response and interpretes it as a template. So once a service response is obtained, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the service instance).",
      "es": "[JSONService].data\nIs an object representing the data of the service. When QCObjects loads a service. It receives the response and interpretes it as a template. So once a service response is obtained, it will get every property of data object and bind it to a template label representing the same property inside the template content between double brakets (example: {{prop1}} in the template content will represent data.prop1 in the service instance)."
    }, {
      "en": "[JSONService].cached\nIs a boolean value that tells QCObjects if the service response needs to be cached or not. When a service is cached, the template content loaded from the service url will be loaded only once. You have to set this value to false for every Service instance you define in order to asure the service is loaded from the resource but not the storage cache.",
      "es": "[JSONService].cached\nIs a boolean value that tells QCObjects if the service response needs to be cached or not. When a service is cached, the template content loaded from the service url will be loaded only once. You have to set this value to false for every Service instance you define in order to asure the service is loaded from the resource but not the storage cache."
    }, {
      "en": "[JSONService].set('prop',value)\nSets a value for a service property.",
      "es": "[JSONService].set('prop',value)\nSets a value for a service property."
    }, {
      "en": "[JSONService].get('prop')\nReturns the value of a service property",
      "es": "[JSONService].get('prop')\nReturns the value of a service property"
    }, {
      "en": "Is a built-in Class definition to load the CONFIG settings from a config.json file",
      "es": "Is a built-in Class definition to load the CONFIG settings from a config.json file"
    }, {
      "en": "The QCObjects HTTP2 Built-In Server will help you to test your application\nin a local environment before to deploy to a production environment.\nFor production environment it is recommended to use QCObjects HTTP2 Built-In Server under Ubuntu 18.x or newer and NodeJS 12.x or newer.",
      "es": "The QCObjects HTTP2 Built-In Server will help you to test your application\nin a local environment before to deploy to a production environment.\nFor production environment it is recommended to use QCObjects HTTP2 Built-In Server under Ubuntu 18.x or newer and NodeJS 12.x or newer."
    }, {
      "en": "To start using the QCObjects HTTP2 Built-In Server, you just go to your project path and execute the following command line in your bash shell:",
      "es": "To start using the QCObjects HTTP2 Built-In Server, you just go to your project path and execute the following command line in your bash shell:"
    }, {
      "en": "It will start serving the files inside the folder you are present, unsing a built-in HTTP2 Server with the default configuration settings.",
      "es": "It will start serving the files inside the folder you are present, unsing a built-in HTTP2 Server with the default configuration settings."
    }, {
      "en": "QCObjects was designed to work into a professional environment. There are many ways and paradigms to use when you define your software architecture. One recommended is using a Multitier or N-Tier architecture.",
      "es": "QCObjects was designed to work into a professional environment. There are many ways and paradigms to use when you define your software architecture. One recommended is using a Multitier or N-Tier architecture."
    }, {
      "en": "The benefits of a Multitier or N-Tier architecture are scalability and reliability of the systems that are demanding higger impact and performance. To go deep into this concepts would unnecessary enlarge this reference document but you can read more about this concepts in the following external links (only for reference and study):",
      "es": "The benefits of a Multitier or N-Tier architecture are scalability and reliability of the systems that are demanding higger impact and performance. To go deep into this concepts would unnecessary enlarge this reference document but you can read more about this concepts in the following external links (only for reference and study):"
    }, {
      "en": "The main goal of a microservice is that you can compact a fragment of backend functionality in a piece of code that can be called remotely from another backend or frontend terminal. Basically you can split a high level backend service into a multiple small micro-services that can complete the task. There are thousands of good examples of this kind of pattern adoption. You can read more about this concept in the following external links (only for reference and study):",
      "es": "The main goal of a microservice is that you can compact a fragment of backend functionality in a piece of code that can be called remotely from another backend or frontend terminal. Basically you can split a high level backend service into a multiple small micro-services that can complete the task. There are thousands of good examples of this kind of pattern adoption. You can read more about this concept in the following external links (only for reference and study):"
    }, {
      "en": "With QCObjects you can code your microservices in a way more fancy, clean and quick.",
      "es": "With QCObjects you can code your microservices in a way more fancy, clean and quick."
    }, {
      "en": "You can also use config.json in the backend side to make some tunning and custom settings for backend, specially useful for making the microservice routes.",
      "es": "You can also use config.json in the backend side to make some tunning and custom settings for backend, specially useful for making the microservice routes."
    }, {
      "en": "Below is an example of a customised config.json file including the backend settings:",
      "es": "Below is an example of a customised config.json file including the backend settings:"
    }, {
      "en": "Inside your config.json file you can set the backend routes for your microservices.\nFor every microservice route, a path and a microservice package string is required.",
      "es": "Inside your config.json file you can set the backend routes for your microservices.\nFor every microservice route, a path and a microservice package string is required."
    }, {
      "en": "When you set up the backend routes, the QCObjects HTTP2 Built-In Server will know how to handle the calls for every path defined. For every other path that is undefined by the backend routes settings, the server will handle the call with the default behavior, that is using a static file as response if it exists.\nWith that in mind you can use QCObjects either to manage and serve static files or dynamically served files when you need it.",
      "es": "When you set up the backend routes, the QCObjects HTTP2 Built-In Server will know how to handle the calls for every path defined. For every other path that is undefined by the backend routes settings, the server will handle the call with the default behavior, that is using a static file as response if it exists.\nWith that in mind you can use QCObjects either to manage and serve static files or dynamically served files when you need it."
    }, {
      "en": "When you set up a backend route definition, you need to specify a microservice package. This microservice package is a QCObjects definition of a package with a Microservice class extended from a BackendMicroservice class already defined by QCObjects.",
      "es": "When you set up a backend route definition, you need to specify a microservice package. This microservice package is a QCObjects definition of a package with a Microservice class extended from a BackendMicroservice class already defined by QCObjects."
    }, {
      "en": "Below is an example of a microservice package definition, writen in the file org.quickcorp.backend.signup.js",
      "es": "Below is an example of a microservice package definition, writen in the file org.quickcorp.backend.signup.js"
    }, {
      "en": "The above microservice is saving a file with the data received from a post request, and answering a jsonrpc 2.0 standard output. Read more about JSON RPC 2.0 Specification here",
      "es": "The above microservice is saving a file with the data received from a post request, and answering a jsonrpc 2.0 standard output. Read more about JSON RPC 2.0 Specification here"
    }, {
      "en": "QCObjects HTTP2 Built-In Server will make a call to the post() method of the Microservice class definition only when a post request is made to the right path defined into the config.json referencing the name of the package as the initial indexing point of reference.",
      "es": "QCObjects HTTP2 Built-In Server will make a call to the post() method of the Microservice class definition only when a post request is made to the right path defined into the config.json referencing the name of the package as the initial indexing point of reference."
    }, {
      "en": "In order to allow QCObjects understand and execute your microservies in the right way, inside a microservice package, a Microservice class definition is required, and also the Microservice class definition must to extend the BackendMicroservice class that is a part of QCObjects built-in classes.",
      "es": "In order to allow QCObjects understand and execute your microservies in the right way, inside a microservice package, a Microservice class definition is required, and also the Microservice class definition must to extend the BackendMicroservice class that is a part of QCObjects built-in classes."
    }, {
      "en": "###Â Working with a Letsencrypt HTTPS certificate, Certbot and QCObjects",
      "es": "###Â Working with a Letsencrypt HTTPS certificate, Certbot and QCObjects"
    }, {
      "en": "qcobjects [options] [command]",
      "es": "qcobjects [options] [command]"
    }, {
      "en": "QCObjects was invited to exhibit as an ALPHA Startup in the RISE Conf Hong Kong 2019. RISE attracts the most dynamic startups from around the world. We'll be showing how QCObjects is making a real Global Impact to the JavaScript developers life transforming the way for coding.",
      "es": "QCObjects was invited to exhibit as an ALPHA Startup in the RISE Conf Hong Kong 2019. RISE attracts the most dynamic startups from around the world. We'll be showing how QCObjects is making a real Global Impact to the JavaScript developers life transforming the way for coding."
    }, {
      "en": "If you want to find out more about RISE event check out their website https://riseconf.com",
      "es": "If you want to find out more about RISE event check out their website https://riseconf.com"
    }, {
      "en": "This website is dynamically generated using QCObjects and it is maintained by QuickCorp",
      "es": "This website is dynamically generated using QCObjects and it is maintained by QuickCorp"
    }, {
      "en": "Reference",
      "es": "Referencia"
    }, {
      "en": "Table of Contents",
      "es": "Tabla de Contenidos"
    }, {
      "en": "Principals",
      "es": "Principios"
    }, {
      "en": "Main features",
      "es": "Características Principales"
    }, {
      "en": "Progressive Web Apps (PWA) Adopted Features",
      "es": "Apps Web Progresivas (PWA) Características Adoptadas"
    }, {
      "en": "Dynamic Components Architecture",
      "es": "Arquitectura de Componentes Dinámicos"
    }, {
      "en": "Quick Start Guide",
      "es": "Guía de Inicio Rápido"
    }, {
      "en": "Start Coding",
      "es": "Comienza a programar"
    }, {
      "en": "QCObjects CLI Tool",
      "es": "QCObjects CLI Tool"
    }, {
      "en": "Welcome to",
      "es": "Bienvenido a"
    }, {
      "en": "CODIGO ELEGANTE, LIMPIO Y RAPIDO",
      "es": "CODIGO ELEGANTE, LIMPIO Y RAPIDO"
    }, {
      "en": "QCObjects",
      "es": "QCObjects"
    }, {
      "en": "Prevent Render-blocking resources",
      "es": "Prevent Render-blocking resources"
    }, {
      "en": "On-Demand Resources Load",
      "es": "On-Demand Resources Load"
    }, {
      "en": "Lazy-loading of images in components (use lazy-src instead of src attribute in img tag)",
      "es": "Lazy-loading of images in components (use lazy-src instead of src attribute in img tag)"
    }, {
      "en": "Cross Browser Javascript Framework for MVC Patterns",
      "es": "Cross Browser Javascript Framework for MVC Patterns"
    }, {
      "en": "ECMA-262 Specification",
      "es": "Especificación ECMA-262"
    }, {
      "en": "PWA Live Demo",
      "es": "PWA Live Demo"
    }, {
      "en": "Demo Integrating Foundation",
      "es": "Demo Integrating Foundation"
    }, {
      "en": "Demo Integrating Materializecss",
      "es": "Demo Integrating Materializecss"
    }, {
      "en": "Demo Using Raw CSS",
      "es": "Demo Using Raw CSS"
    }, {
      "en": "Demo of QCObjects using and manipulating canvas objects",
      "es": "Demo of QCObjects using and manipulating canvas objects"
    }, {
      "en": "Become a Sponsor",
      "es": "Become a Sponsor"
    }, {
      "en": "Check out the QCObjects SDK",
      "es": "Check out the QCObjects SDK"
    }, {
      "en": "Donate",
      "es": "Donar"
    }, {
      "en": "Installing",
      "es": "Instalación"
    }, {
      "en": "Using QCObjects with Atom:",
      "es": "Using QCObjects with Atom:"
    }, {
      "en": "Using QCObjects in Visual Studio Code:",
      "es": "Using QCObjects in Visual Studio Code:"
    }, {
      "en": "Installing with NPM:",
      "es": "Installing with NPM:"
    }, {
      "en": "Installing the docker playground:",
      "es": "Installing the docker playground:"
    }, {
      "en": "One-Step Installation Script for Ubuntu 18.x",
      "es": "One-Step Installation Script for Ubuntu 18.x"
    }, {
      "en": "One-Step Installation Script for macOS",
      "es": "One-Step Installation Script for macOS"
    }, {
      "en": "Install and test QCObjects on Microsoft Windows OS",
      "es": "Install and test QCObjects on Microsoft Windows OS"
    }, {
      "en": "QCObjects Multi-Cloud Installation",
      "es": "QCObjects Multi-Cloud Installation"
    }, {
      "en": "DigitalOcean One-Click Droplet",
      "es": "DigitalOcean One-Click Droplet"
    }, {
      "en": "AWS Amazon Machine Images (AMI)",
      "es": "AWS Amazon Machine Images (AMI)"
    }, {
      "en": "Amazon Web Services AWS PIB (Private Amazon Machine Image)",
      "es": "Amazon Web Services AWS PIB (Private Amazon Machine Image)"
    }, {
      "en": "Using the development version code in the straight way into HTML5:",
      "es": "Using the development version code in the straight way into HTML5:"
    }, {
      "en": "Using the CDN minified version code from jsDelivr CDN",
      "es": "Using the CDN minified version code from jsDelivr CDN"
    }, {
      "en": "Using the latest non-minified version from jsDelivr CDN",
      "es": "Using the latest non-minified version from jsDelivr CDN"
    }, {
      "en": "Using UNPKG CDN",
      "es": "Using UNPKG CDN"
    }, {
      "en": "Essentials",
      "es": "Essentials"
    }, {
      "en": "The QCObjects HTTP2 Built-In Server",
      "es": "The QCObjects HTTP2 Built-In Server"
    }, {
      "en": "Start serving your files with QCObjects",
      "es": "Start serving your files with QCObjects"
    }, {
      "en": "Principios of an N-Tier or Multitier architecture",
      "es": "Principios of an N-Tier or Multitier architecture"
    }, {
      "en": "Micro-services Principios",
      "es": "Micro-services Principios"
    }, {
      "en": "Backend settings in config.json",
      "es": "Backend settings in config.json"
    }, {
      "en": "The QCObjects Microservice Class and Package",
      "es": "The QCObjects Microservice Class and Package"
    }, {
      "en": "Generating a Self-Signed Certificate with QCObjects",
      "es": "Generating a Self-Signed Certificate with QCObjects"
    }, {
      "en": "Quick Start your PWA (Progressive Web App)",
      "es": "Quick Start your PWA (Progressive Web App)"
    }, {
      "en": "Quick Start your AMP (Accelerated Mobile Page)",
      "es": "Quick Start your AMP (Accelerated Mobile Page)"
    }, {
      "en": "Step 1: Start creating a main import file and name it like: cl.quickcorp.js. Put it into packages/js/ file directory",
      "es": "Step 1: Start creating a main import file and name it like: cl.quickcorp.js. Put it into packages/js/ file directory"
    }, {
      "en": "Step 2: Then create some services inhereting classes into the file js/packages/cl.quickcorp.services.js :",
      "es": "Step 2: Then create some services inhereting classes into the file js/packages/cl.quickcorp.services.js :"
    }, {
      "en": "Step 3: Now it's time to create the components (cl.quickcorp.components.js)",
      "es": "Step 3: Now it's time to create the components (cl.quickcorp.components.js)"
    }, {
      "en": "Step 4: Once you have done the above components declaration, you will now want to code your controllers (cl.quickcorp.controller.js)",
      "es": "Step 4: Once you have done the above components declaration, you will now want to code your controllers (cl.quickcorp.controller.js)"
    }, {
      "en": "Step 5: To use into the HTML5 code you only need to do some settings between script tags:",
      "es": "Step 5: To use into the HTML5 code you only need to do some settings between script tags:"
    }, {
      "en": "Usage",
      "es": "Uso"
    }, {
      "en": "Options",
      "es": "Opciones"
    }, {
      "en": "Commands",
      "es": "Comandos"
    }, {
      "en": "Use:",
      "es": "Uso:"
    }]

  }),
  {
    _i18n_messages_es: New(i18n_messages_es)
  }
]);
