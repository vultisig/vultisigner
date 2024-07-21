package tasks

const QUEUE_NAME = "vultisigner"
const (
	TypeKeyGeneration = "key:generation"
	TypeKeySign       = "key:sign"
)

type KeyGenerationPayload struct {
	LocalKey           string
	Name               string
	SessionID          string
	ChainCode          string
	HexEncryptionKey   string
	EncryptionPassword string
}

// KeysignPayload is a struct that represent a requst submitted to redis queue to sign messages
type KeysignPayload struct {
	PublicKeyECDSA   string   `json:"public_key_ecdsa"`   // ECDSA public key, used to identify the backup file
	Messages         []string `json:"messages"`           // Messages need to be signed
	Session          string   `json:"session"`            // Session ID , it should be an UUID
	HexEncryptionKey string   `json:"hex_encryption_key"` // Hex encryption key, used to encrypt the keysign messages
	IsECDSA          bool     `json:"is_ecdsa"`           // indicate use ECDSA or EDDSA key to sign the messages
	VaultPassword    string   `json:"vault_password"`     // password used to decrypt the vault file
}
