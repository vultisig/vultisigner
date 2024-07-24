package relay

import (
	"fmt"
	"os"
	"path/filepath"

	vaultType "github.com/vultisig/commondata/go/vultisig/vault/v1"
	"github.com/vultisig/vultisigner/common"
)

type LocalStateAccessorImp struct {
	Key    string
	Folder string
	Vault  *vaultType.Vault
}

func NewLocalStateAccessorImp(key, folder, vaultFileName, vaultPasswd string) (*LocalStateAccessorImp, error) {
	localStateAccessor := &LocalStateAccessorImp{
		Key:    key,
		Folder: folder,
		Vault:  nil,
	}

	var err error
	if localStateAccessor.Folder == "" {
		localStateAccessor.Folder, err = os.Getwd()
		if err != nil {
			return nil, fmt.Errorf("failed to get current directory: %w", err)
		}
	}

	if vaultFileName != "" {
		fileName := filepath.Join(localStateAccessor.Folder, vaultFileName+".bak")
		if _, err := os.Stat(fileName); os.IsNotExist(err) {
			return nil, fmt.Errorf("file %s does not exist", fileName)
		}

		buf, err := os.ReadFile(fileName)
		if err != nil {
			return nil, fmt.Errorf("fail to read file %s: %w", fileName, err)
		}

		localStateAccessor.Vault, err = common.DecryptVaultFromBackup(vaultPasswd, buf)
		if err != nil {
			return nil, fmt.Errorf("fail to decrypt vault from the backup, err: %w", err)
		}
	}

	return localStateAccessor, nil
}

func (l *LocalStateAccessorImp) GetLocalState(pubKey string) (string, error) {
	if l.Vault != nil {
		for _, keyshare := range l.Vault.KeyShares {
			if keyshare.PublicKey == pubKey {
				return keyshare.Keyshare, nil
			}
		}

		return "", fmt.Errorf("%s keyshare does not exist", pubKey)
	}

	fileName := filepath.Join(l.Folder, pubKey+"-"+l.Key+".json")
	if _, err := os.Stat(fileName); os.IsNotExist(err) {
		return "", fmt.Errorf("file %s does not exist", fileName)
	}

	buf, err := os.ReadFile(fileName)
	if err != nil {
		return "", fmt.Errorf("fail to read file %s: %w", fileName, err)
	}

	return string(buf), nil
}

func (l *LocalStateAccessorImp) SaveLocalState(pubKey, localState string) error {
	fileName := filepath.Join(l.Folder, pubKey+"-"+l.Key+".json")

	return os.WriteFile(fileName, []byte(localState), 0644)
}

func (l *LocalStateAccessorImp) RemoveLocalState(pubKey string) error {
	fileName := filepath.Join(l.Folder, pubKey+"-"+l.Key+".json")

	return os.Remove(fileName)
}
