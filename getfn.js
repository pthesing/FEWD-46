<script>
function get(url, callback) {
  var request = new XMLHttpRequest();

  request.open("GET", url, true);

  request.addEventListener("readystatechange", handleReadyStateChange)

  function handleReadyStateChange() {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.responseText);
    }
  };

  request.send();
}

// Call our get function...
get("https://api.github.com/users/avand", console.log);
</script>
