function get_caf() { 
    //Split the cookies by their name value pairs
    const nvs = document.cookie.split('; ');

    //For each pair in the list of pairs search for a key of 'caffeine='
    for(const nv of nvs) {
        if (nv.startsWith('caffeine=')){
            //If there is a caffeine key with and actual value assigned to it, get that value
            let current_caffeine = nv.substring('caffeine='.length);
            return current_caffeine;
        } else {
            //If there is no valid username assign an empty string to current_username
            return "";
        }
    }
};