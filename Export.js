javascript:(function()%7Blet%20charactersContainers%3Ddocument.getElementsByClassName(%22main-container%22)%5B0%5D%3Bif(null!%3DcharactersContainers)%7Blet%20e%3D%7Bformat%3A%22GOOD%22%2Cversion%3A2%2Csource%3A%22Battle_Chronicles_To_Checklist_Helper_Exporter%22%7D%2Ct%3D%5B%5D%3BcharactersContainers.childNodes.forEach((e%3D%3E%7Blet%20l%3De.getElementsByClassName(%22name%22)%5B0%5D%2Cn%3De.getElementsByClassName(%22level%22)%5B0%5D%2Ca%3De.getElementsByClassName(%22fate-level%22)%5B0%5D%2Cs%3Dl.innerText.replace(%2F%5Cs%2B%2Fg%2C%22%22)%2Cr%3DparseInt(n.innerText.replace(%22Lv.%20%22%2C%22%22))%2Cc%3D0%3Bnull!%3Da%26%26(c%3DparseInt(a.innerText))%3Blet%20o%3D%7Bkey%3As%2Clevel%3Ar%2Cconstellation%3Ac%2Cascension%3Ar%3E80%3F6%3Ar%3E70%3F5%3Ar%3E60%3F4%3Ar%3E50%3F3%3Ar%3E40%3F2%3Ar%3E20%3F1%3A0%2Ctalent%3A%7Bauto%3A1%2Cskill%3A1%2Cburst%3A1%7D%7D%3Bt.push(o)%7D))%2Ct.length%3E0%26%26(e.characters%3Dt)%3Blet%20l%3Ddocument.createElement(%22a%22)%2Cn%3Dnew%20Blob(%5BJSON.stringify(e%2Cnull%2C2)%5D%2C%7Btype%3A%22application%2Fjson%22%7D)%3Bl.href%3DURL.createObjectURL(n)%2Cl.download%3D%22battle_chronicles_genshin_characters.json%22%2Cl.click()%7D%7D)()