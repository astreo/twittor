// jshint esversion:6

// Guardar el caché dinámico

function actualizarCacheDinamico(dynamicCache, req, res) {
    if (req.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}