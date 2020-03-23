// jshint esversion:6

// Guardar el caché dinámico

function actualizarCacheDinamico(dynamicCache, req, res) {
    console.log('Req.Ok?', res.ok);
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            console.log('desde sw-utils - Cache put');
            return res.clone();
        });
    } else {
        return res;
    }
}