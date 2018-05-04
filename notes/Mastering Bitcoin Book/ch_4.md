# Keys, Addresses

* Ownership of bitcoin is established through *digital keys*, *bitcoin addresses*, and *digital signatures.*

* A **wallet** is a simple database file created by users to store the *digital keys*

* A **witness** is a cryptography term for the digital signature used to spend funds.

**Keys** come in pairs of *public* and *private*. 

*Public key* is analogous to a bank account number and a *Private key* is analagous to secret PIN that provides control over the account.

When making a payment, the recipient’s public key is represented by its digital fingerprint, called a bitcoin address, which is used in the same way as the beneficiary name on a check (i.e., "Pay to the order of").

# Public Key Cryptography and Cryptocurrency

* Bitcoin uses elliptic curve multiplication as the basis for its cryptography.

In bitcoin, we use public key cryptography to create a key pair that controls access to bitcoin. The key pair consists of a private key and—​derived from it—​a unique public key. The public key is used to receive funds, and the private key is used to sign transactions to spend the funds.

**the public key is derived from the private key, so all you really need to know is the private key**

1. From the **private key**, we use *elliptic curve multiplication* which is a one-way cryptographic function to generate a **public key**.
2. From the **public key**, we use a one-way cryptographic *hash-function* to generate a bitcoin **address**

[!alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0401.png "private key -> public key -> bitcoin address")

**Why use assymmetric cryptography?** 

In simple terms, it makes it possible for anyone to verify every signature on every transaction, while ensuring that only the owners of private keys can produce valid signatures.

i.e. Hard to replicate, easy to verify digital signatures.

**Private Key?**

A private key is just a number picked at random between 1 and 2^256.

To generate private key using the Bitcoin Core Client:

```
$ bitcoin-cli getnewaddress
1J7mdg5rbQyUHENYdx39WVWK7fsLpEoXZy
$ bitcoin-cli dumpprivkey 1J7mdg5rbQyUHENYdx39WVWK7fsLpEoXZy
KxFC1jmwwCoACiCAWZ3eXa96mBM6tb3TYzGmf6YwgdGWZgawvrtJ
```


**Public Key?**

The public key is calculated from the private key using elliptic curve multiplication, which is irreversible: K = k * G, where k is the private key, G is a constant point called the generator point, and K is the resulting public key. 

i.e. Public Key = Private Key * Some Constant corresponding to a point lying somewhere on the elliptic curve


[!alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0402.png "elliptic curve")

The curve is defined NOT on a field of Real numbers but rather over a finite field of *prime order*



**In elliptic curves, adding a point to itself is the equivalent of drawing a tangent line on the point and finding where it intersects the curve again, then reflecting that point on the x-axis.**



[!alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0404.png " Elliptic curve cryptography: visualizing the multiplication of a point G by an integer k on an elliptic curve")
*Elliptic curve cryptography: visualizing the multiplication of a point G by an integer k on an elliptic curve*



**Bitcoin Address?**

On a paper check, that beneficiary can sometimes be the name of a bank account holder, but can also include corporations, institutions, or even cash. 

Because paper checks do not need to specify an account, but rather use an abstract name as the recipient of funds, they are very flexible payment instruments

Starting with the public key K, we compute the SHA256 hash and then compute the RIPEMD160 hash of the result, producing a 160-bit (20-byte) number:

**A bitcoin address is not the same as a public key. Bitcoin addresses are derived from a public key using a one-way function.**


[!alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0405.png "Public Key to Bitcoin Address")

Bitcoin's Base58 Alphabet: `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`

[!alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0406.png "Base58Check Encoding")























