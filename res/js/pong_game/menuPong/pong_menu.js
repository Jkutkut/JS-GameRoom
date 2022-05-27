
  function change() {
    const className =
        document.getElementById('link').className;
    document.getElementById('link').className =
        document.getElementById('adios').className;

    document.getElementById('adios').className = className;
}
