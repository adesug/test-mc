### Soal No 1. Valid Palindrome 

- A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true *if it is a **palindrome***, or false otherwise.

- **Example 1 :**
    **Input:** s = "A man, a plan, a canal: Panama"
    **Output:** true
    **Explanation:** "amanaplanacanalpanama" is a palindrome.

- **Example 2 :** 
    **Input:** s = "race a car"
    **Output:** false
    **Explanation:** "raceacar" is not a palindrom

- **Example 3:**
    **Input:** s = " "
    **Output:** true
    **Explanation:** s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.

- **Constraints :**
    - 1 <= s.length <= 2 * 105
    - s consists only of printable ASCII characters.

### Jawaban Soal No 1.
- Code : [Klik Disini](https://github.com/adesug/test-mc/blob/main/validPalindrome.js) untuk melihat code.
- Hasil Running : [Klik Disini](https://drive.google.com/file/d/186AEXVLBgEvOCInQN_kKmRF304hvKK5w/view?usp=sharing) untuk melihat hasil running.
- Berikut Penjelasannya :
   1. Mengubah Huruf Menjadi Kecil :
        -  `s.toLowerCase()` mengubah semua huruf dalam string s menjadi huruf kecil.
   2. Menghapus Karakter Non - Alphanumeric :
        - `s.replace(/[^a-z0-9]/g, '')` menghapus semua karakter yang bukan huruf atau angka dari string `s`.
   3. Memeriksa Palindrom :
        - `s.split('')` membagi string menjadi array karakter.
        - `reverse()` membalikkan urutan elemen dalam array.
        - `join('')` menggabungkan kembali array karakter menjadi string.
        - membandingkan string yang sudah dibalik (reversed) dengan string asli yang sudah dibersihkan (`s`). Jika keduanya sama, maka string tersebut adalah palindrom.
----------------------------------------



### Soal No 2. Gas Station
- There are n gas stations along a circular route, where the amount of gas at the i<sup>th</sup> station is gas[i].
- You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the i<sup>th</sup> station to its 
next (i + 1)<sup>th</sup> station. You begin the journey with an empty tank at one of the gas stations.
- Given two integer arrays gas and cost, return the starting gas station's index if you can travel around  the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is **guaranteed** to be **unique**
  
- **Example 1:**
    **Input:** gas = [1,2,3,4,5], cost = [3,4,5,1,2]
    **Output:** 3
    **Explanation:**
    Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
    Travel to station 4. Your tank = 4 - 1 + 5 = 8
    Travel to station 0. Your tank = 8 - 2 + 1 = 7
    Travel to station 1. Your tank = 7 - 3 + 2 = 6
    Travel to station 2. Your tank = 6 - 4 + 3 = 5
    Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
    Therefore, return 3 as the starting index.

- **Example 2:**
    **Input:** gas = [2,3,4], cost = [3,4,3]
    **Output:** -1
    **Explanation:**
    You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
    Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
    Travel to station 0. Your tank = 4 - 3 + 2 = 3
    Travel to station 1. Your tank = 3 - 3 + 3 = 3
    You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
    Therefore, you can't travel around the circuit once no matter where you start.
    **Constraints:**
    • n == gas.length == cost.length
    • 1 <= n <= 10<sup>5</sup>
    • 0 <= gas[i], cost[i] <= 10<sup>4</sup>

### Jawaban Soal No 2.
- Code : [Klik Disini](https://github.com/adesug/test-mc/blob/main/gasStation.js) untuk melihat code.
- Hasil Running : [Klik Disini](https://drive.google.com/file/d/1Fz4UuWUWFEMUfGZ7_Ew4gUSDUwJAWswT/view?usp=sharing) untuk melihat hasil running.
- Berikut Penjelasannya :
   1. Cek Apakah Total Gas Cukup :
        -  Kita menghitung total gas dan total biaya dari semua stasiun.
        -  Jika total gas kurang dari total biaya, maka tidak mungkin untuk menyelesaikan perjalanan dari stasiun mana pun, dan kita langsung mengembalikan `-1`.
   2. Temukan Titik Mulai: :
        - Kita menggunakan variabel `currentGas` untuk melacak sisa bahan bakar saat ini saat kita bergerak dari satu stasiun ke stasiun berikutnya.
        - Jika currentGas menjadi negatif, berarti perjalanan dari stasiun startIndex ke stasiun `i` tidak mungkin dilakukan. Maka kita mengatur startIndex ke stasiun berikutnya (`i + 1`) dan mereset currentGas.
        - Setelah iterasi selesai, jika total gas lebih besar atau sama dengan total biaya, maka `startIndex` yang ditemukan adalah stasiun yang bisa digunakan untuk menyelesaikan perjalanan.
