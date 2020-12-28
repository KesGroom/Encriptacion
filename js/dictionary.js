function encriptar(letra){
    var letter;
    switch (letra) {
        case 'a':
            letter = '2MyZ'
            return letter;
            break;
        case 'A':
            letter = '2MYZ'
            return letter;
            break;
    
        case 'b':
            letter = 'Ypj2'
            return letter;
            break;
        case 'B':
            letter = 'Ypk2'
            return letter;
            break;
    
        default:
            letter= '?';
            return letter;
            break;
    }
}